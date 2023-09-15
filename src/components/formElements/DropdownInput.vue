<template>
  <div class="base-input-wrapper input-dropdown-wrapper">
    <div v-if="isDropdownShown" class="status-mask" @click="toggleDropdown" />
    <label :for="fieldName" class="input-title">{{ fieldTitle }}</label>
    <Field
      :name="fieldName"
      v-model="selectedElement"
      :placeholder="placeholder"
      :rules="rules"
      class="input-field"
    >
      <div class="position-menu">
        <div class="input-field dropdown-input" @click="toggleDropdown">
          {{ selectedOption }}
          <img
            src="../../assets/img/icons/expand_more.svg"
            alt="Search black icon"
            class="dropdown-icon"
            :class="{'rotate-icon' : isDropdownShown}"
          >
        </div>
        <!-- Dropdown menu -->
        <div
          class="dropdown-menu"
          :class="{'show-menu' : isDropdownShown }"
        >
          <div :class="{'scrolled' : isScrollable }">
            <div
              v-for="(option, index) in optionList"
              :key="index"
              class="menu-option"
              @click="() => selectOption(option)"
              data-test="dropdown-option"
            >
              {{  option }}
            </div>
        </div>
        </div>
      </div>
    </Field>
  </div>
</template>

<script lang="ts">
/** Vue */
import { Options, Vue } from 'vue-class-component';
/** Validation */
import { Field } from 'vee-validate';
/** Interface */
import IDropdownInput from '../../interfaces/IDropdownInput';

@Options({
  components: {
    Field,
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
      require: true,
    },
    rules: {
      type: String,
      require: false,
    },
    isScrollable: {
      type: Boolean,
      require: false,
      default: false,
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
  optionList!: string[];
  selectedOption!: string;
  rules!: string;
  isScrollable!: boolean;

  isDropdownShown = false;
  selectedElement = '';

  mounted() : void {
    this.selectedElement = this.selectedOption;
  }

  toggleDropdown() : void {
    this.isDropdownShown = !this.isDropdownShown;
  }

  selectOption(value: string): void {
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

.position-menu {
  position: relative;
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
  height: 0;
  overflow: hidden;
  position: absolute;
  top: 45px;
  left: 0;
  right: 0;
  border-radius: 4px;
  padding: 0 10px;
  border: 0 solid rgb(255, 255, 255);
  z-index: 5;
  background-color: rgb(255, 255, 255);
  font-size: 13px;
  transition-duration: .2s, 0s;
  transition-delay: 0s, .2s;
}

.show-menu {
  height: 252px;
  padding: 5px 10px;
  border: 1px solid gray;
}

.show-menu:has(.scrolled) {
  height: 150px;
}

.scrolled {
  height: 140px;
  overflow-y: auto;
  padding: 5px 0;
  scrollbar-width: 3px;
}

.scrolled::-webkit-scrollbar {
  width: 3px;
  background-color: rgb(169, 169, 169);
}

.scrolled::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgb(169, 169, 169);
}

.scrolled::-webkit-scrollbar-thumb {
  background-color: darkgrey;
}

.menu-option {
  height: 30px;
  padding: 7px 30px;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  visibility: hidden;
  opacity: 0;
  transition-property: opacity, visibility;
  transition-duration: .3s, 0s;
  transition-delay: 0s, .3s;
}

.show-menu .menu-option  {
  visibility: visible;
  opacity: 1;
  transition-delay: 0s, 0s;
}

.menu-option:hover {
  background-color: rgba(128, 176, 212, 0.773);
}

.dropdown-icon {
  opacity: 0.5;
  rotate: 0deg;
  transition: rotate .7s ease;
}

.rotate-icon {
  rotate: 180deg;
  transition: rotate .7s ease;
}
</style>
