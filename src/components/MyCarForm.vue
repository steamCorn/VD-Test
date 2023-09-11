<template>
  <div class="form-wrapper">
    <Form @submit="onSubmitForm">
      <!-- License plate -->
      <SearchInput
        fieldName="license"
        fieldTitle="License plate"
        :rules="'required|minLength:6'"
        @on-fetch="searchCar"
        :labelField="'License plate'"
      />

      <!-- Postcode -->
      <BaseInput
        fieldName="zipcode"
        :fieldTitle="'Zipcode'"
        :rules="'required|length:6|postcode'"
        :maxlength="6"
        :placeholder="'Enter your postcode'"
        :labelField="'Zipcode'"
      />

      <!-- House number -->
      <BaseInput
        fieldName="houseNumber"
        :fieldTitle="'House number'"
        :rules="'required|numeric'"
        :maxlength="5"
        :placeholder="'Enter your house number'"
        :labelField="'House number'"
      />

      <!-- House number addition -->
      <BaseInput
        field-name="houseAddition"
        :field-title="'House number addition'"
        :maxlength="3"
        :rules="'numberAddition'"
        :placeholder="'Enter your house number addition'"
        :labelField="'House number addition'"
      />

      <!-- Birthday field -->
      <DateInput
        field-name="birthDate"
        :field-title="'Birth date'"
        :rules="'required|birthDate'"
        :labelField="'Birth date'"
        @select-date="setClaimFreeYears"
      />

      <!-- Mileage -->
      <DropdownInput
        fieldName="mileage"
        :fieldTitle="'Mileage'"
        :placeholder="'Select option'"
        :rules="'required|mileage'"
        :option-list="mileageOptions"
        :selected-option="selectedMileage"
        @on-select="setMileageOption"
      />

      <pre>{{ selectedMileage }}</pre>

      <!-- Claim Free years -->
      <!-- <DropdownInput
        fieldName="claimYear"
        :fieldTitle="'Claim Free years'"
        :placeholder="'Select option'"
        :option-list="claimOptions"
        :selected-option="claimOptions[4]"
        @on-select="setMileageOption"
      /> -->

      <!-- <pre>{{ claimOptions[4] }}</pre> -->

      <button class="submit-button" type="submit">Ok</button>
    </Form>

    <div>
      <h2 v-if="thereAnyCar">There no such car</h2>
      <div v-else>
        <h1>{{ carData.kenteken }}</h1>
        <h2>{{ carData.merk }}</h2>
        <h2>{{ carData.datum_eerste_toelating }}</h2>
        <h4>{{ carData.eerste_kleur }}</h4>
      </div>
    </div>
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
import SearchInput from './formElements/SearchInput.vue';
import BaseInput from './formElements/BaseInput.vue';
import DropdownInput from './formElements/DropdownInput.vue';
import DateInput from './formElements/DateInput.vue';
/** Interface and Modals */
import { VehicleNL } from '../interfaces/Vehicle';
import AllVehicleData from '../models/for_API_Response/AllVehicleData';
import IDropdownOption from '../interfaces/IDropdownOption';
/** Constants */
import mileageOptions from '../constants/mileageOptions';
/** API */
import fetchVehicle from '../api/externalAPI';

defineRule('required', required);
defineRule('length', length);
defineRule('numeric', numeric);

defineRule('minLength', (value: string, [limit]:[number]) => {
  // The field is empty so it should pass
  console.log('value rules', value, 'value length', value.length)
  if (!value || !value.length) {
    return true;
  }
  if (value.length < limit || value.length > limit) {
    return `This field must be at least ${limit} characters`;
  }
  return true;
});

defineRule('postcode', (value: string) => {
  const postcodePattern = /^\d{4}[A-Za-z]{2}$/;
  if (!value || !value.length) {
    return 'Dit veld is verplicht.';
  }
  if (value.length < 6) {
    return 'Veld lengte incorrect (6 tekens: 1234AA).';
  }
  if (!postcodePattern.test(value)) {
    return 'Veld moet een geldige postcode zijn (1234AA).';
  }
  return true;
});

defineRule('numberAddition', (value: string) => {
  const alpha = /[A-Za-z]/g;
  const number = /[0-9]/g;
  if (number.test(value) && alpha.test(value)) {
    console.log('letter and number', value);
    return 'Should be only number or letter.';
  }
  return true;
});

defineRule('birthDate', (value: string) => {
  const todayDate = moment(new Date());
  const minDate = moment().subtract(100, 'years');
  const formateValue = moment(new Date(value));

  if (moment(formateValue).isAfter(todayDate) || moment(formateValue).isBefore(minDate)) {
    return 'Your date is not valid';
  }
  return true;
});

defineRule('mileage', (value: string) => {
  console.log('mileage', value)
  return true;
});

@Options({
  components: {
    Form,
    Field,
    SearchInput,
    BaseInput,
    DateInput,
    DropdownInput,
    ErrorMessage,
  },
  props: { },
})
export default class MyCarForm extends Vue {
  carData: VehicleNL = {
    kenteken: '',
    merk: '',
    datum_eerste_toelating: '',
    eerste_kleur: '',
  };
  thereAnyCar = false;
  modelTest = '';

  mileageOptions = mileageOptions;
  selectedMileage: IDropdownOption = mileageOptions[1];

  maxClaimYears = 0;
  claimOptions: string[] = ['-5', '-4', '-3', '-2', '-1', '0'];

  onInputTest() : void {
    console.log('modelTest', this.modelTest);
  }

  onSubmitForm(formData: object) : void {
    console.log({ formData });
  }

  async searchCar(valueField: string): Promise<AllVehicleData | undefined> {
    const carRes = await fetchVehicle(valueField);
    console.log('carRes', carRes);
    if (carRes !== undefined) {
      this.carData = { ...carRes } as VehicleNL;
      this.thereAnyCar = false;
    } else {
      this.thereAnyCar = true;
    }
    return carRes;
  }

  setMileageOption(option: IDropdownOption): void {
    this.selectedMileage = option;
  }

  setClaimFreeYears(value: string) : void {
    const currentYear = moment(new Date()).year();
    const birthYear = moment(value).year();
    const maxValue = currentYear - birthYear - 18;
    if (maxValue > 0) {
      this.maxClaimYears = maxValue;
      for (let i = 1; i <= maxValue; i++) {
        this.claimOptions.push(i.toString());
      }
    }
  }

  // async findCar(valueField: string) : Promise<Vehicle[] | undefined> {
  //   console.log(valueField);
  //   const carRes = await fetchVehicle(valueField);
  //   console.log(carRes)
  //   return carRes;
  // }

  /** Setup */
  // myCarForm = setup(() => {
  //   const counter = ref(0);

  //   function increment() {
  //     counter.value = counter.value + 1;
  //   }

  //   return {
  //     counter,
  //     increment,
  //   };
  // })
}
</script>

<style lang="css">
.form-wrapper {
  width: 80%;
  margin: 50px auto;
  background-color: beige;
}

.form-wrapper .input-field {
  height: 40px;
  width: 100%;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 0 40px;
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
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
}

.error-text {
  position: absolute;
  bottom: 0;
  color: brown;
  font-size: 12px;
}
</style>
