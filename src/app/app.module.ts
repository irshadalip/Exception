import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddedRecipeCardComponent } from './added-recipe-card/added-recipe-card.component';
import { AddRecipeFormComponent } from './add-recipe-form/add-recipe-form.component';
import { HighLightCard } from './app.overDirective';
import { HomeComponent } from './home/home.component';
import { DataManagementService } from './dataManagement.service'
import { LogService } from './log.service'
import { RouterModule, Routes } from '@angular/router';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipesComponent } from './recipes/recipes.component';
import { FavouriteHomeManagerService } from './favorite-home.manager.service';
import { RecipeDetailComponent } from './recipe-detail-card/recipe-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AddedRecipeCardComponent,
    AddRecipeFormComponent,
    HighLightCard,
    HomeComponent,
    SignInFormComponent,
    RecipeDetailComponent,
    RecipesComponent,
    HighLightCard
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LogService, DataManagementService, AuthGuard, AuthService, FavouriteHomeManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
