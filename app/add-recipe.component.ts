import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model'

@Component({
  selector: 'add-recipe',
  template: `
  <form class="form-group">
    <label for="newTitle">Title</label>
    <input type="text" #newTitle name="newTitle" class="form-control">
    <label for="newIngredients">Ingredients</label>
    <input type="text" #newIngredients name="newIngredients" class="form-control">
    <label for="newInstructions">Instructions</label>
    <input type="text" #newInstructions name="newInstructions" class="form-control">
    <button type="button" class="btn" (click)="addRecipe(newTitle.value, newIngredients.value, newInstructions.value); newTitle.value=''; newIngredients.value=''; newInstructions.value='';" id="addRecipe">Add Recipe</button>
  </form>
  `
})

export class AddRecipeComponent {
  @Output() clickSender = new EventEmitter();

  addRecipe(title: string, ingredients: string[], instructions: string) {
    let newRecipe: Recipe = new Recipe(title, ingredients, instructions);
    this.clickSender.emit(newRecipe);
  }
}
