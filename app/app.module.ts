import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { AddRecipeComponent } from './add-recipe.component';
import {EditRecipeComponent } from './edit-recipe.component';



@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AddRecipeComponent, EditRecipeComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
