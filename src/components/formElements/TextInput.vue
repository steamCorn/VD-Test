<template>
  <div class="license">
    <label :for="fieldName">{{ fieldTitle }}</label>
    <!-- <Field
      :name="fieldName"
      :placeholder="fieldName"
      v-model="valueField"
      :rules="rules"
      type="text"
      class="input-field license-field"
      @input="onInput"
    /> -->
    

    <Field
      :name="fieldName"
      :placeholder="fieldName"
      v-model="valueField"
      :rules="rules"
      v-slot="{ field, handleChange }"
    >
      <div>
        <input
          :placeholder="fieldName"
          :value="replaceCharacters(field.value)"
          maxlength="6"
          type="text"
          class="input-field license-field"
          @blur="handleChange"
          @change="handleChange"
          @keyup.enter="() => searchValue()"
        />
        <button @click="() => searchValue()" type="button">Emiting</button>
      </div>
    </Field>
    <!-- <input
      v-model="valueField"
      :name="fieldName"
      :placeholder="fieldName"
      type="text"
      class="input-field license-field"
    /> -->
    <!-- <button @click="$emit('on-fetch', field.value)" type="button">Emiting</button> -->
    <ErrorMessage :name="fieldName" class="error-text"/>
  </div>
</template>

<script lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import { Options, Vue, setup } from 'vue-class-component';

@Options({
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  props: {
    fieldTitle: {
      type: String,
    },
    fieldName: {
      type: String,
    },
    rules: {
      type: String,
    },
  },
  emits: ['on-fetch', 'on-input'],
})
export default class TextInput extends Vue {
  valueField = '';

  // mounted() : void {
  //   console.log('mounted');
  // }

  onInput() : void {
    this.valueField = this.valueField.trim().replace(/[^A-Z0-9]/ig, '').toUpperCase();
    this.$emit('on-input', this.valueField);
  }

  replaceCharacters(input: string) : string {
    this.valueField = this.valueField.trim().replace(/[^A-Z0-9]/ig, '').toUpperCase();
    return input.trim().replace(/[^A-Z0-9]/ig, '').toUpperCase();
  }

  searchValue() : void {
    console.log('searchValue', this.valueField)
    this.$emit('on-fetch', this.valueField);
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

<style lang="css">
.license-field {
  border: 2px solid black;
}

.error-text {
  color: brown;
  font-size: 12px;
}
</style>
