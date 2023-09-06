<template>
  <div class="license">
    <label :for="fieldName">{{ fieldTitle }}</label>
    <Field
      :name="fieldName"
      :placeholder="fieldName"
      v-model="valueField"
      rules="required"
      type="text"
      class="input-field license-field"
      @input="onInput(valueField)"
    />
    <!-- <input
      v-model="valueField"
      :name="fieldName"
      :placeholder="fieldName"
      type="text"
      class="input-field license-field"
    /> -->
    <button @click="$emit('on-fetch', valueField)" type="button">Emiting</button>
    <ErrorMessage :name="fieldName" />
  </div>
</template>

<script lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import { Options, Vue, setup } from 'vue-class-component';
import { ref } from 'vue';

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

  mounted() : void {
    console.log('mounted');
  }

  onInput(valueField: string) : void {
    this.$emit('on-input', valueField);
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
</style>
