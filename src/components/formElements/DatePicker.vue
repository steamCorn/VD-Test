<template>
  <div class="base-input-wrapper">
    <label :for="fieldName" class="input-title">{{ fieldTitle }}</label>
    <!-- <Field
      v-slot="{ value }"
      :name="fieldName"
      :placeholder="placeholder"
      v-model="dateValue"
      :value="dateValue"
      :rules="rules"
      :maxlength="maxlength"
      :max="max"
      type="date"
      class="input-field input-wrapper"
      @input="onInput"
      :label="labelField"
    /> -->
    <Field
      v-slot="{ value }"
      :name="fieldName"
      :rules="rules"
      :value="formatDDMMYYYY(dateValue)"
      :label="labelField"
    >
      <input
        type="date"
        :max="todayDate"
        :min="minDate"
        v-model="dateValue"
        class="input-field input-wrapper"
        @input="onInput(value)"
      >
      <pre>{{ value }}</pre>
      <pre>{{ dateValue }}</pre>
      <!-- v-model="dateValue"
        :value="dateValue" -->
    </Field>
    <pre>{{ dateValue }}</pre>
    <ErrorMessage :name="fieldName" class="error-text"/>
  </div>
</template>

<script lang="ts">
/** Vue */
import { Options, Vue } from 'vue-class-component';
/** Validation */
import { Form, Field, ErrorMessage } from 'vee-validate';
/** External library */
import moment from 'moment';
/** Interface */
import IBaseInput from '../../interfaces/IBaseInput';

@Options({
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  props: {
    fieldTitle: {
      type: String,
      require: false,
      default: '',
    },
    fieldName: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: false,
      default: 'text',
    },
    rules: {
      type: String,
      require: false,
    },
    placeholder: {
      type: String,
      require: false,
      default: '',
    },
    maxlength: {
      type: Number,
      require: false,
      default: 50,
    },
    max: {
      type: Number,
      require: false,
    },
    labelField: {
      type: String,
      require: false,
    },
  },
  emits: [],
})
export default class DatePicker extends Vue implements IBaseInput {
  fieldTitle!: string;
  fieldName!: string;
  type!: string;
  rules: string | undefined;
  placeholder!: string;
  maxlength: number | undefined;
  max: number | undefined;
  labelField: string | undefined;

  dateValue = '';
  todayDate = moment(new Date()).format('YYYY-MM-DD');
  minDate = moment().subtract(100, 'years').format('YYYY-MM-DD');

  // onInput(): void {
  //   console.log('onInput', this.dateValue);
  // }

  onInput(date: string): void {
    console.log('onInput', date);
  }

  formatDDMMYYYY(date: string) : string | void {
    console.log('date', date)
    let result = date;
    if (date) {
      result = moment(new Date(date)).format('DD-MM-YYYY');
    }
    console.log('result', result)
    return result;
  }

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

<style scoped lang="css">
/* input[type="date"]::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0);
    opacity: 1;
    display: block;
    background: url(https://mywildalberta.ca/images/GFX-MWA-Parks-Reservations.png) no-repeat;
    width: 20px;
    height: 20px;
    border-width: thin;
} */
</style>
