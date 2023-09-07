<template>
  <div class="form-wrapper">
    <!-- <h1>counter: {{ myCarForm.counter }}</h1>
    <button @click="myCarForm.increment"> CLick to ++ </button> -->
    <Form @submit="onSubmitForm">
      <Field name="firstInput" type="text" v-model="modelTest" rules="required" @input="onInputTest"/>
      <!-- <div>{{ modelTest }}</div> -->
      <Field name="secondInput" type="number"/>
      <!-- <input name="firstInput" v-model="value" />
      <pre>{{ value }}</pre> -->
      <!-- <Field v-slot="{ field }" name="terms" type="checkbox" :value="true">
        <label>
          <input type="checkbox" name="terms" v-bind="field" :value="true" />
          I agree
        </label>
      </Field> -->

      <TextInput
        fieldName="license"
        fieldTitle="License plate"
        :rules="'required|minLength:6'"
        @on-input="getInputValue"
        @on-fetch="searchCar"
      />

      <button class="submit-button">Ok</button>
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
import { Form, Field, defineRule } from 'vee-validate';
import { required, length, min } from '@vee-validate/rules';
import { Options, Vue, setup } from 'vue-class-component';
import { ref } from 'vue';
import TextInput from './formElements/TextInput.vue';
import { VehicleNL } from '../interfaces/Vehicle';
import AllVehicleData from '../models/for_API_Response/AllVehicleData';
import fetchVehicle from '../api/externalAPI';

defineRule('required', required);
defineRule('length', length);
defineRule('min', min);

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

@Options({
  components: {
    Form,
    Field,
    TextInput,
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

  onInputTest() : void {
    console.log('modelTest', this.modelTest);
  }

  // private message = 'Hello, World!';

  onSubmitForm(formData: object) : void {
    console.log(formData);
  }

  async searchCar(valueField: string): Promise<AllVehicleData | undefined> {
    console.log('Emit')
    console.log(valueField);
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

  getInputValue(value: string): void {
    // console.log('value', value);
    if (value.length === 6) {
      console.log('make call', value);
      
    }
  }

  mounted() : void {
    console.log('mounted');
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
  margin-top: 10px;
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
</style>
