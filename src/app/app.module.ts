import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddedRecipeCardComponent } from './added-recipe-card/added-recipe-card.component';
import { AddRecipeFormComponent } from './add-recipe-form/add-recipe-form.component';
import { HighLightCard } from './app.overDirective';
import { HomeComponent } from './home/home.component';
import { DataManagementService } from './dataManagement.service'
import { LogService } from './log.service'

@NgModule({
  declarations: [
    AppComponent,
    AddedRecipeCardComponent,
    AddRecipeFormComponent,
    HighLightCard,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LogService, DataManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
