<template>
  <div class="base-input-wrapper">
    <label :for="fieldName">{{ fieldTitle }}</label>
    <Field
      :name="fieldName"
      :placeholder="placeholder"
      v-model="inputValue"
      :value="replaceCharacters(inputValue)"
      :rules="rules"
      :maxlength="maxlength"
      :type="type"
      class="input-field input-wrapper"
      @input="onInput"
    />
    <ErrorMessage :name="fieldName" class="error-text"/>
  </div>
</template>

<script lang="ts">
/** Vue */
import { Options, Vue } from 'vue-class-component';
/** Validation */
import { Form, Field, ErrorMessage } from 'vee-validate';

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
  },
  emits: [],
})
export default class TextInput extends Vue {
  inputValue = ''.toUpperCase();

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
.base-input-wrapper {
  position: relative;
  margin-top: 20px;
}

.base-input-wrapper .input-wrapper {
  margin-top: 10px;
}
</style>
