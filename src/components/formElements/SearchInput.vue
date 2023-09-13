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

      <div class="input-content" >
        <input
          :placeholder="placeholder"
          :value="replaceCharacters(value)"
          type="text"
          maxlength="6"
          @blur="searchValue"
          @change="handleChange"
          @input="handleChange"
          class="input-field license-field"
        >

        <!-- Icon -->
        <!-- <img
          src="../../assets/img/icons/ic_search.svg"
          alt="Delete icon"
          class="input-icon"
          :class="{'opacity-icon' : valueField.length !== 6}"
          @click="cleanField"
        > -->
      </div>
      <!-- Search button -->
      <!-- <div class="search-button">
        <img
          src="../../assets/img/icons/ic_search.svg"
          alt="Search black icon"
          class="input-icon"
          :class="{'opacity-icon' : valueField.length !== 6}"
          @click="searchValue"
        >
      </div> -->
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
  emits: ['on-search'],
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
    this.$emit('on-search', this.valueField);
  }

  cleanField() : void {
    this.valueField = '';
    this.$emit('on-search', this.valueField);
  }
}
</script>

<style scoped lang="css">
.input-wrapper {
  position: relative;
  display: flex;
  gap: 15px;
}

.input-content {
  width: 100%;
}

.search-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  background-color: rgb(115, 134, 197);
  border-radius: 4px;
  cursor: pointer
}

/* .search-button .input-icon {
  position: absolute;
  right: 16px;
  top: 8px;
} */

.search-button:hover {
  background-color: rgb(160, 173, 215);
}

.opacity-icon {
  opacity: 0.5;
}

</style>
