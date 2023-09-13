<template>
  <div id="app" class="vd-form">
    <simple-card class="vd-form form-wrapper">
      <template #title>Autoverzekering vergelijken</template>
      <template #content>
        <Form @submit="onSubmitForm" class="form-content">
          <!-- License plate -->
          <SearchInput
            fieldName="license"
            fieldTitle="Kenteken"
            placeholder="Vul uw kenteken in"
            :rules="'required|license:6'"
            @on-search="searchVehicle"
            labelField="Kenteken"
          />

          <div v-if="carData.merk && !thereAnyCar" class="information-cart">
            {{ `${carData.merk} ${getYear(carData.datum_eerste_toelating)}` }}
          </div>

          <!-- Postcode -->
          <BaseInput
            fieldName="zipcode"
            fieldTitle="Postcode"
            :rules="'required|length:6|postcode'"
            :maxlength="6"
            placeholder="Vul uw postcode in"
            labelField="Postcode"
          />

          <div class="flex-row">
            <!-- House number -->
            <BaseInput
              fieldName="houseNumber"
              fieldTitle="Huisnummer"
              :rules="'required|numeric'"
              :maxlength="5"
              labelField="Huisnummer"
            />
            <!-- House number addition -->
            <BaseInput
              field-name="houseAddition"
              field-title="Toevoeging"
              :maxlength="3"
              :rules="'numberAddition'"
              labelField="Toevoeging"
            />
          </div>

          <!-- Birthday field -->
          <DateInput
            field-name="birthDate"
            field-title="Geboortedatum"
            rules="required|birthDate"
            labelField="Geboortedatum"
            @select-date="setClaimFreeYearsOptions"
          />

          <!-- Claim Free years -->
          <DropdownInput
            fieldName="claimYear"
            fieldTitle="Claim gratis jaren"
            :rules="'required'"
            :placeholder="'Select option'"
            :option-list="claimOptions"
            :isScrollable="true"
            :selected-option="selectedClaimYear"
            @on-select="setSelectedClaimYear"
          />

          <!-- Mileage -->
          <DropdownInput
            fieldName="mileage"
            fieldTitle="Kilometerstand"
            :rules="'required'"
            :placeholder="'Select option'"
            :option-list="mileage"
            :selected-option="selectedMileage"
            @on-select="setMileageOption"
          />

          <button class="submit-button btn" type="submit">Vergelijken</button>
        </Form>
        </template>
    </simple-card>
  </div>
</template>

<script lang="ts">
/** Vue */
import { Options, Vue } from 'vue-class-component';
/** Validation */
import { Form, Field, ErrorMessage, defineRule } from 'vee-validate';
import { required, length, numeric } from '@vee-validate/rules';
/** External library */
import moment from 'moment';
/** Components */
import SimpleCard from './simpleCard.vue';
import SearchInput from '../formElements/SearchInput.vue';
import BaseInput from '../formElements/BaseInput.vue';
import DropdownInput from '../formElements/DropdownInput.vue';
import DateInput from '../formElements/DateInput.vue';
/** Interface and modals */
import IVehicleNL from '../../interfaces/IVehicleNL';
import AllVehicleData from '../../models/for_API_Response/AllVehicleData';
/** Constants */
import mileageOptions from '../../constants/mileageOptions';
/** API */
import { fetchVehicle, sendDataAsQueryParamsUrl } from '../../api/externalAPI';

defineRule('required', required);
defineRule('length', length);
defineRule('numeric', numeric);

defineRule('license', (value: string, [limit]:[number], field) => {
  const licensePattern = /^[A-Za-z]{2}\d{3}[A-Za-z]{1}$/;
  if (value.length < limit || value.length > limit) {
    return `Dit veld moet uit ${limit} tekens bestaan.`;
  }
  if (!licensePattern.test(value)) {
    return `${field.label} is niet geldig.`;
  }
  return true;
});

defineRule('postcode', (value: string) => {
  const postcodePattern = /^\d{4}[A-Za-z]{2}$/;
  if (!value || !value.length) {
    return 'Dit veld is verplicht.';
  }
  if (value.length < 6) {
    return 'Dit veld lengte incorrect (6 tekens: 1234AA).';
  }
  if (!postcodePattern.test(value)) {
    return 'Dit veld moet een geldige postcode zijn (1234AA).';
  }
  return true;
});

defineRule('numberAddition', (value: string) => {
  const alpha = /[A-Za-z]/g;
  const number = /[0-9]/g;
  if (number.test(value) && alpha.test(value)) {
    return 'Dit veld mag alleen een cijfer of letter bevatten.';
  }
  return true;
});

defineRule('birthDate', (value: string) => {
  const todayDate = moment(new Date());
  const minDate = moment().subtract(100, 'years');
  const formateValue = new Date(value);
  if (moment(formateValue).isBefore(minDate)) {
    return 'Uw geboortedatum mag niet ouder zijn dan 100 jaaren.';
  }
  if (moment(formateValue).isAfter(todayDate)) {
    return 'Uw geboortedatum is niet geldig.';
  }
  return true;
});

@Options({
  components: {
    SimpleCard,
    Form,
    Field,
    SearchInput,
    BaseInput,
    DateInput,
    DropdownInput,
    ErrorMessage,
  },
})

export default class CarForm extends Vue {
  carData: IVehicleNL = {
    merk: '',
    datum_eerste_toelating: '',
  };
  thereAnyCar = false;
  modelTest = '';

  // Create array of option which contains only value of mileage
  mileage = mileageOptions.map((option) => option.value);
  selectedMileage: string = this.mileage[1];

  claimOptions: string[] = ['-5', '-4', '-3', '-2', '-1', '0'];
  selectedClaimYear: string = this.claimOptions[5];

  setMileageOption(option: string): void {
    this.selectedMileage = option;
  }

  setSelectedClaimYear(option: string): void {
    this.selectedClaimYear = option;
  }

  setClaimFreeYearsOptions(value: string) : void {
    const currentYear = moment(new Date()).year();
    const birthYear = moment(value).year();
    const maxValue = currentYear - birthYear - 18;
    if (maxValue > 0) {
      // Add options of claim year.
      for (let i = 1; i <= maxValue; i++) {
        this.claimOptions.push(i.toString());
      }
    }
  }

  getYear(value: string) : string {
    return value.substring(0, 4);
  }

  async searchVehicle(valueField: string): Promise<AllVehicleData | undefined> {
    if (!valueField.length || valueField.length < 6) {
      this.thereAnyCar = true;
      return;
    }
    console.log(valueField)
    const carRes = await fetchVehicle(valueField);
    console.log('carRes', carRes);
    if (carRes !== undefined) {
      this.carData = { ...carRes } as IVehicleNL;
      this.thereAnyCar = false;
    } else {
      this.thereAnyCar = true;
    }
    return carRes;
  }

  async onSubmitForm(formData: string[][]) : Promise<void> {
    console.log(formData);
    await sendDataAsQueryParamsUrl(formData);
  }

  onSubmit(): void {
    console.log('Button is clicked');
  }
}
</script>

<style lang="css">
.vd-form {
  width: 100%;
}

.form-wrapper {
  width: 90%;
  min-width: 260px;
  margin: 50px auto;
  background-color: beige;
}

.form-content {
  display: flex;
  flex-direction: column;
}

.information-cart {
  font-size: 16px;
  background-color: rgb(233 233 233);
  box-shadow: inset -1px 3px 7px 13px #e2e0e0;
  padding: 10px 20px;
  margin-bottom: 10px;
}

.flex-row {
  display: flex;
  justify-content: space-between;
}

.flex-row .base-input-wrapper {
  width: 45%;
}

.form-wrapper .input-field {
  height: 40px;
  width: 100%;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 0 40px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.form-wrapper .input-field:focus,
.form-wrapper .input-field:focus-visible {
  border: 1px solid rgb(63, 63, 63) !important;
  outline: none;
}

.form-wrapper .submit-button {
  background-color: rgb(68, 202, 72);
  height: 40px;
  width: 100%;
  border: 1px solid rgb(67, 245, 72);
  border-radius: 4px;
  margin-top: 20px;
  cursor: pointer;
}

.error-text {
  position: absolute;
  bottom: 0;
  color: brown;
  font-size: 12px;
}

.btn {
  background: #0cbe3b;
  text-align: center;
  padding: 10px 10px;
  font-weight: 600;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: .1s ease;
}

.btn:hover {
  background: #0ed642;
}

@media only screen and (min-width: 768px) {
  .vd-form {
    width: 430px;
    margin: auto;
  }
}

@media only screen and (max-width: 408px) {
  .flex-row {
    display: flex;
    flex-direction: column;
  }

  .flex-row .base-input-wrapper {
    width: 100%;
  }

  .form-wrapper .input-field {
    padding: 0 10px 0 30px;
  }
}
</style>
