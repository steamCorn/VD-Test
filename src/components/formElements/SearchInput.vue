<template>
  <div class="base-input-wrapper">
    <label :for="fieldName" class="input-title">{{ fieldTitle }}</label>
    <!-- <Field
      :name="fieldName"
      :placeholder="fieldName"
      v-model="valueField"
      :rules="rules"
      type="text"
      class="input-field license-field"
      @input="() => onInput(valueField)"
    /> -->

    <Field
      :name="fieldName"
      v-model="valueField"
      :rules="rules"
      v-slot="{ value, handleChange }"
      :label="labelField"
    >
      <div class="input-wrapper">
        <input
          :placeholder="fieldName"
          :value="replaceCharacters(value)"
          maxlength="6"
          type="text"
          @input="handleChange"
          @blur="handleChange"
          @change="handleChange"
          @keyup.enter="searchValue"
          class="input-field license-field"
        />

        <!-- Icon -->
        <img
          v-if="valueField.length > 0"
          src="../../assets/img/icons/ic_search_black.svg"
          alt="Search black icon"
          class="input-icon"
          @click="searchValue"
        >
        <img
          v-else
          src="../../assets/img/icons/ic_search_gray.svg"
          alt="Search gray icon"
          class="input-icon"
          @click="searchValue"
        >
      </div>
    </Field>
    <ErrorMessage :name="fieldName" class="error-text"/>
  </div>
</template>

<script lang="ts">
/** Vue */
import { Options, Vue, setup } from 'vue-class-component';
/** Validation */
import { Form, Field, ErrorMessage } from 'vee-validate';
/** Interface */
import ISearchInput from '../../interfaces/ISearchInput';

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
    },
    fieldName: {
      type: String,
      require: true,
    },
    rules: {
      type: String,
      require: false,
    },
    labelField: {
      type: String,
      require: false,
    },
  },
  emits: ['on-fetch'],
})
export default class SearchInput extends Vue implements ISearchInput {
  fieldTitle!: string;
  fieldName!: string;
  rules!: string;
  labelField: string | undefined;

  valueField = '';

  replaceCharacters(input: string) : string {
    this.valueField = this.valueField.trim().replace(/[^A-Z0-9]/ig, '').toUpperCase();
    return input.trim().replace(/[^A-Z0-9]/ig, '').toUpperCase();
  }

  searchValue() : void {
    // console.log('searchValue', this.valueField)
    if (!this.valueField.length) {
      return;
    }
    this.$emit('on-fetch', this.valueField);
  }

  onInput(searchText: string) : void {
    console.log('searchText', searchText);
  }

  // TODO: make normal searching
  // inputTimeout: any;
  // onInput(input: string) :void {
  //   console.log('onInput', input);
  //   clearTimeout(this.inputTimeout);
  //   this.inputTimeout = setTimeout(() => {
  //     this.searchValue();
  //   }, 700);
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

<style scoped lang="css">
.input-wrapper {
  position: relative;
  display: flex;
}

.input-wrapper .input-icon {
  position: absolute;
  right: 16px;
  top: 8px;
  cursor: pointer;
}
</style>
