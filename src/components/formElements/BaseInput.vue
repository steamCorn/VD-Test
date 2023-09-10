<template>
  <div class="base-input-wrapper">
    <label :for="fieldName" class="input-title">{{ fieldTitle }}</label>
    <Field
      :name="fieldName"
      :placeholder="placeholder"
      v-model="inputValue"
      :value="replaceCharacters(inputValue)"
      :rules="rules"
      :maxlength="maxlength"
      :max="max"
      :type="type"
      class="input-field input-wrapper"
      @input="onInput"
      :label="labelField"
    />
    <ErrorMessage :name="fieldName" class="error-text"/>
  </div>
</template>

<script lang="ts">
/** Vue */
import { Options, Vue } from 'vue-class-component';
/** Validation */
import { Form, Field, ErrorMessage } from 'vee-validate';
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
export default class BaseInput extends Vue implements IBaseInput {
  fieldTitle!: string;
  fieldName!: string;
  type!: string;
  rules: string | undefined;
  placeholder!: string;
  maxlength: number | undefined;
  max: number | undefined;
  labelField: string | undefined;

  inputValue = '';

  replaceCharacters(input: string) : string {
    this.inputValue = this.inputValue.trim().replace(/[^A-Z0-9]/ig, '').toUpperCase();
    return input.trim().replace(/[^A-Z0-9]/ig, '').toUpperCase();
  }

  onInput(): void {
    console.log('onInput', this.inputValue);
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
</style>
