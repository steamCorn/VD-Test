<template>
  <div data-test="app">
    <car-form />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CarForm from './components/forms/carForm.vue';

@Options({
  components: {
    CarForm,
  },
})
export default class App extends Vue {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
* {
  font-family: 'Open Sans', sans-serif;
  box-sizing: border-box;
}

.base-input-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 6px;
  padding-bottom: 20px;
}

.input-title {
  font-size: 14px;
  margin-bottom: 8px;
}
</style>
