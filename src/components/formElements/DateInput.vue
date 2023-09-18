<template>
  <div class="base-input-wrapper date-input-wrapper">
    <label :for="fieldName" class="input-title">{{ fieldTitle }}</label>
    <Field
      v-model="selectedDate"
      :name="fieldName"
      :rules="rules"
      :label="labelField"
    >
      <!-- For prevent entering date less than 100 years can be use
        :min-date="minDate"
        :year-range="[minYear, maxYear]"
        It will block selecting not valid date -->
      <!-- <VueDatePicker
        v-model="selectedDate"
        placeholder="DD-MM-YYYY"
        :format="formatDateInput(selectedDate)"
        :enable-time-picker="false"
        :max-date="todayDate"
        prevent-min-max-navigation
        :month-change-on-scroll = "true"
        auto-apply
        @update:model-value="$emit('select-date', selectedDate)"
        input-class-name="input-field input-wrapper datepicker"
      /> -->
    </Field>
    <ErrorMessage :name="fieldName" class="error-text"/>
  </div>
</template>

<script lang="ts">
/** Vue */
import { Options, Vue } from 'vue-class-component';
/** Validation */
import { Form, Field, ErrorMessage } from 'vee-validate';
/** External library */
// import VueDatePicker from '@vuepic/vue-datepicker';
// import '@vuepic/vue-datepicker/dist/main.css';
import moment from 'moment';
/** Interface */
import IDatepicker from '../../interfaces/IDatepicker';

@Options({
  components: {
    Form,
    Field,
    ErrorMessage,
    // VueDatePicker,
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
    rules: {
      type: String,
      require: false,
    },
    placeholder: {
      type: String,
      require: false,
      default: '',
    },
    labelField: {
      type: String,
      require: false,
    },
  },
  emits: ['select-date'],
})
export default class DateInput extends Vue implements IDatepicker {
  fieldTitle!: string;
  fieldName!: string;
  rules: string | undefined;
  placeholder!: string;
  labelField: string | undefined;

  selectedDate = '';
  todayDate = moment(new Date()).format('YYYY-MM-DD');

  /** These params can be used to prevent selecting not valid date */
  // minDate = moment().subtract(100, 'years').format('YYYY-MM-DD');
  // maxYear = moment(new Date()).format('YYYY');
  // minYear = moment().subtract(100, 'years').format('YYYY');

  date = new Date();

  formatDateInput(date: Date) : string {
    if (!date) {
      return '';
    }
    const day = this.addNullBeforeNumber(date.getDate());
    const month = this.addNullBeforeNumber(date.getMonth() + 1);
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  addNullBeforeNumber(number: number) : string|number {
    return number < 10 ? `0${number}` : number;
    /** Another option is to use padStart */
    // return number < 10 ? number.toString().padStart(2, '0') : number;
  }
}
</script>

<style scoped lang="css">
.date-input-wrapper {
  position: relative;
}

:deep(.dp__input) {
  font-size: 14px;
}

:deep(.dp__input::placeholder) {
  font-size: 13px;
}

</style>
