import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model'

@Component({
  selector: 'edit-recipe',
  template: `
    <div *ngIf="selectedRecipe">
      <h2>Title</h2>
      <p>{{selectedRecipe.title}}</p>
      <input [(ngModel)]="selectedRecipe.title" class="form-control">
      <ul>
        <h2>Ingredients</h2>
        <li *ngFor="let ingredient of selectedRecipe.ingredients; let index = index; trackBy:trackByIndex;">{{ingredient}}
          <input [(ngModel)]="selectedRecipe.ingredients[index]" class="form-control">
        </li>
      </ul>
      <h2>Instructions</h2>
      <textarea [(ngModel)]="selectedRecipe.instructions" rows="10" cols="53"></textarea>
      <button type="button" class="btn" (click)="doneButtonHasBeenClicked()">Done</button>
    </div>
  `
})

export class EditRecipeComponent {
  @Input() selectedRecipe: Recipe;
  @Output() doneButtonClickedSender = new EventEmitter();

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  doneButtonHasBeenClicked(){
    this.doneButtonClickedSender.emit();
  }
}
