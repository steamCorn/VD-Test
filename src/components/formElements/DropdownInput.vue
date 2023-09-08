<template>
  <div class="input-dropdown-wrapper">
    <label :for="fieldName" class="input-title">{{ fieldTitle }}</label>
    <Field
      v-slot="{ value }"
      :name="fieldName"
      :placeholder="placeholder"
      :value="selectedOption?.id"
      as="select"
      class="input-field dropdown-menu"
    >
      <option
        v-for="option in optionList"
        :key="option.id"
        :value="option.id"
        :selected="selectedOption?.value"
        class="menu-option"
      >
        {{ option.value }}
      </option>
    </Field>
    <!-- <select :id="fieldName" :name="fieldName" :value="selectedOption?.id" class="input-field dropdown-menu">
      <option
        v-for="option in optionList"
        :key="option.id"
        :value="option.id"
        :selected="selectedOption?.value"
        class="menu-option"
      >
        {{ option.value }}
      </option>
    </select> -->
  </div>
</template>

<script lang="ts">
/** Vue */
import { Options, Vue } from 'vue-class-component';
/** Validation */
import { Form, Field, ErrorMessage } from 'vee-validate';
/** Interface */
import IDropdownInput from '../../interfaces/IDropdownInput';
import IDropdownOption from '../../interfaces/IDropdownOption';

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
    placeholder: {
      type: String,
      require: false,
      default: '',
    },
    optionList: {
      type: Array,
      require: true,
    },
    selectedOption: {
      type: Object,
      require: false,
    },
  },
  emits: ['on-select'],
})
export default class DropdownInput extends Vue implements IDropdownInput {
  fieldTitle!: string;
  fieldName!: string;
  placeholder: string | undefined;
  optionList!: IDropdownOption[];
  selectedOption!: IDropdownOption | undefined;

  // inputValue: any;

  selectOption(value: void): void {
    console.log('selected option', value);
  }
}
</script>

<style scoped lang="css">
.input-dropdown-wrapper .dropdown-menu option {
  background-color: rgb(231, 230, 232);
  font-size: 14px;
}

/* .input-dropdown-wrapper .dropdown-menu select {
  background-color: rgb(146, 61, 231);
  border: 2px solid red;
} */
/* .dropdown-menu option.menu-option {
  height: 27px;
} */
</style>
