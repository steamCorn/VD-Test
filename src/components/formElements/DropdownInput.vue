<template>
  <div class="base-input-wrapper input-dropdown-wrapper">
    <div v-if="isDropdownShown" class="status-mask" @click="toggleDropdown" />
    <label :for="fieldName" class="input-title">{{ fieldTitle }}</label>
    <Field
      v-slot="{ field }"
      :name="fieldName"
      v-model="selectedElement"
      :placeholder="placeholder"
      :rules="rules"
      class="input-field dropdown-menu"
    >
      <!-- <option
        v-for="(option, index) in optionList"
        v-bind="field"
        :key="option.id"
        :value="option.id ? option.id : option"
        :selected="selectedOption?.value ? selectedOption.value : selectedOption"
        @select="$emit('on-select', option)"
        @click="selectOption(option)"
        class="menu-option"
      >
        {{ option.value || option }}
      </option> -->
      <div class="input-field dropdown-input" @click="toggleDropdown">
        {{ getSelectedOption }}
        <img
          src="../../assets/img/icons/expand_more.svg"
          alt="Search black icon"
          class="dropdown-icon"
          :class="{'rotate-icon' : isDropdownShown}"
        >
      </div>

      <div v-show="isDropdownShown" class="dropdown-menu">
        <div
          v-for="(option, index) in optionList"
          :key="index"
          class="menu-option"
          @click="() => selectOption(option)"
        >
          {{ option.value }}
        </div>
      </div>
    </Field>
    <!-- <pre>{{ selectedElement }}</pre> -->
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
      type: [Object, String],
      require: false,
    },
    rules: {
      type: String,
      require: false,
    },
  },
  emits: ['on-select'],
  watch: {
    selectedOption(newVal) {
      this.selectedElement = newVal;
    },
  },
})
export default class DropdownInput extends Vue implements IDropdownInput {
  fieldTitle!: string;
  fieldName!: string;
  placeholder: string | undefined;
  optionList!: IDropdownOption[];
  selectedOption!: IDropdownOption | undefined;
  rules!: string;

  isDropdownShown = false;
  selectedElement: IDropdownOption = { id: 0, value: '' };

  // valueInput(value: IDropdownOption): string {
  //   console.log('valueInput', value)
  //   // console.log('props', this.selectedOption?.value)
  //   if (this.selectedOption?.value) {
  //     this.selectedElement = this.selectedOption
  //   }
  //   return value.value;
  // }
  get getSelectedOption(): string {
    // console.log('props', this.selectedOption?.value)
    if (this.selectedOption?.value) {
      this.selectedElement = this.selectedOption;
    }
    return this.selectedElement.value;
  }

  toggleDropdown() : void {
    this.isDropdownShown = !this.isDropdownShown;
  }

  selectOption(value: IDropdownOption): void {
    this.selectedElement = value;
    this.$emit('on-select', value);
    this.isDropdownShown = false;
  }
}
</script>

<style scoped lang="css">
.status-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}

.dropdown-input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
  background-color: rgb(255, 255, 255);
  font-size: 13px;
  cursor: pointer;
}

.dropdown-menu {
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid gray;
  z-index: 5;
  background-color: rgb(255, 255, 255);
  font-size: 13px;
  transition: all .5s ease-in-out;
}

.menu-option {
  height: 30px;
  padding: 7px 30px;
  transition: 0.3s;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
}

.menu-option:hover {
  background-color: rgba(128, 176, 212, 0.773);
}

.dropdown-icon {
  opacity: 0.5;
  /* transform: rotate(0); */
  rotate: 0deg;
  transition: rotate .7s ease;
}

.rotate-icon {
  /* transform: rotate(180deg); */
  rotate: 180deg;
  transition: rotate .7s ease;
}

/* .input-dropdown-wrapper .dropdown-menu option {
  background-color: rgb(231, 230, 232);
  font-size: 14px;
} */
</style>
