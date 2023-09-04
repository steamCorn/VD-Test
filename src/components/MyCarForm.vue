<template>
  <div>
    <h1>Car form</h1>
    <Form @submit="onSubmitForm">
      <!-- <Field name="firstInput" type="text"/> -->
      <!-- <input name="fieldName" v-model="value" />
      <pre>{{ value }}</pre> -->
    </Form>
  </div>
</template>

<script lang="ts">
import { Form, Field } from 'vee-validate';
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    Form,
    Field,
  },
  props: { },
})
export default class MyCarForm extends Vue {
  // value = 'Something';

  onSubmitForm(firstInput: string, secondInput: number) : void {
    console.log({
      first: firstInput,
      second: secondInput,
    });
  }

  mounted() : void {
    console.log('mounted');
  }
}
</script>

<style lang="scss">
</style>
