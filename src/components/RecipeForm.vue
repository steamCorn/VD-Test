<template>
  <div>
    <form @submit.prevent="addRecipe">
      <div>
        <label>Name</label>
        <input v-model="recipe.name" />
        {{ !recipe.name ? "Name is required" : "" }}
      </div>
      <div>
        <label>Ingredients</label>
        <textarea v-model="recipe.ingredients"></textarea>
        {{ !recipe.ingredients ? "Ingredients is required" : "" }}
      </div>
      <div>
        <label>Steps</label>
        <textarea v-model="recipe.steps"></textarea>
        {{ !recipe.steps ? "Steps is required" : "" }}
      </div>
      <button type="submit">Add Recipe</button>
    </form>
    <div v-for="(r, index) of recipes" :key="r.index">
      <h1>{{ r.name }}</h1>
      <h2>Ingredients</h2>
      <div class="content">{{ r.ingredients }}</div>
      <h2>Steps</h2>
      <div class="content">{{ r.steps }}</div>
      <button type="button" @click="deleteRecipe(index)">Delete Recipe</button>
    </div>
  </div>
</template>

<script lang="ts">
// import Vue from 'vue';
import Component, { Vue } from 'vue-class-component';
import { Recipe } from '../interfaces/Recipe';

// @Component
export default class RecipeForm extends Vue {
  recipe: Recipe = {
    id: '',
    name: '',
    ingredients: '',
    steps: '',
  };

  recipes: Recipe[] = [];

  get formValid(): boolean {
    const { name, ingredients, steps } = this.recipe;
    return Boolean(name && ingredients && steps);
  }

  get formData(): { name: string, ingredients: string, steps: string } {
    const { name, ingredients, steps } = this.recipe;
    return { name, ingredients, steps };
  }

  addRecipe() : void {
    if (!this.formValid) {
      return;
    }
    console.log('this.formValid', this.formData);
    this.recipes.push({
      ...this.recipe,
    } as Recipe);
  }

  deleteRecipe(index: number) : void {
    this.recipes.splice(index, 1);
  }
}
</script>

<style scoped>
.content {
  white-space: pre-wrap;
}
</style>
