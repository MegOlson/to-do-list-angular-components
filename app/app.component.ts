import { Component } from '@angular/core';
import { Recipe } from './recipe.model'


@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html'
})


export class AppComponent {
  selectedRecipe = null;
  masterRecipeList: Recipe[] = [
   new Recipe(
     "Mac N Cheese",
     ["Mac", "Cheese"],
     "Add Cheese to Mac. Heat and Serve."
   ),
   new Recipe(
     "Pizza",
     ["Crust", "Cheese", "Sauce"],
     "Add sauce and cheese to crust. Bake and eat."
   ),
   new Recipe(
     "Breakfast Cereal",
     ["Cereal", "Milk"],
     "Add cereal to bowl and pour appropriate amount of milk. Serve cold and enjoy."
   )
 ]

 addRecipeChild(newRecipe: Recipe) {
   this.masterRecipeList.push(newRecipe);
 }

 editButtonHasBeenClicked(clickedRecipe){
   this.selectedRecipe = clickedRecipe;
 }

 doneEditing(){
   this.selectedRecipe = null;
 }

}
