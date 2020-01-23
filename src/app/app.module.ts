import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AddedRecipeCardComponent } from './allrecipe/addedrecipe/component/added-recipe-card.component';
import { AddRecipeFormComponent } from './newrecipe/component/add-recipe-form.component';
import { HighLightCard } from './app.overDirective';
import { HomeComponent } from './home/component/home.component';
import { NewDataManagerService } from './allrecipe/addedrecipe/service/newdata-manager.service'
import { LogService } from './logservice/log.service'
import { SignInFormComponent } from './login/component/sign-in-form.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './authprovider/auth.service';
import { AuthGuard } from './authprovider/auth-guard.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipesComponent } from './allrecipe/recipes/component/recipes.component';
import { FavouriteHomeManagerService } from './home/service/favourite-home.manager.service';
import { RecipeDetailComponent } from './allrecipe/recipedetail/component/recipe-detail.component';


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
  providers: [LogService, NewDataManagerService, AuthGuard, AuthService, FavouriteHomeManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
