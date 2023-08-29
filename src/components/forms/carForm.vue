<template>
  <div id="app">
    <RecipeForm />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SimpleCard from './simpleCard.vue';
import RecipeForm from '../RecipeForm.vue';

@Options({
  components: {
    SimpleCard,
    RecipeForm,
  },
})

export default class CarForm extends Vue {
  // components: {
  //   RecipeForm,
  // },
  onSubmit(): void {
    console.log('Button is clicked');
  }
}
</script>
