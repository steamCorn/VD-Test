<template>
  <div class="base-input-wrapper">
    <label :for="fieldName" class="input-title">{{ fieldTitle }}</label>
    <Field
      :name="fieldName"
      v-model="valueField"
      :rules="rules"
      v-slot="{ value, handleChange }"
      :label="labelField"
    >
      <div class="input-wrapper">
        <input
          :placeholder="placeholder"
          :value="replaceCharacters(value)"
          type="text"
          @blur="handleChange"
          @change="handleChange"
          @keyup.enter="searchValue"
          class="input-field license-field"
        />

        <!-- Icon -->
        <img
          src="../../assets/img/icons/ic_search.svg"
          alt="Search black icon"
          class="input-icon"
          :class="{'opacity-icon' : valueField.length !== 6}"
          @click="searchValue"
        >
      </div>
    </Field>
    <ErrorMessage :name="fieldName" class="error-text"/>
  </div>
</template>

<script lang="ts">
/** Vue */
import { Options, Vue } from 'vue-class-component';
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
    placeholder: {
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
  placeholder: string | undefined;

  valueField = '';

  replaceCharacters(input: string) : string {
    this.valueField = this.valueField.trim().replace(/[^A-Z0-9]/ig, '').toUpperCase();
    return input.trim().replace(/[^A-Z0-9]/ig, '').toUpperCase();
  }

  searchValue() : void {
    if (!this.valueField.length || this.valueField.length !== 6) {
      return;
    }
    this.$emit('on-fetch', this.valueField);
  }

  onInput(searchText: string) : void {
    console.log('searchText', searchText);
  }
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

.opacity-icon {
  opacity: 0.5;
}

</style>
