import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddedRecipeCardComponent } from './added-recipe-card/added-recipe-card.component';
import { AddRecipeFormComponent } from './add-recipe-form/add-recipe-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AddedRecipeCardComponent,
    AddRecipeFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
