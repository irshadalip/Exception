import { NgModule } from '@angular/core';
import { AuthGuard } from './authprovider/auth-guard.service';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeFormComponent } from './newrecipe/component/add-recipe-form.component';
import { SignInFormComponent } from './login/component/sign-in-form.component';
import { HomeComponent } from './home/component/home.component';
import { RecipesComponent } from './allrecipe/recipes/component/recipes.component';
import { RecipeDetailComponent } from './allrecipe/recipedetail/component/recipe-detail.component';

const appRoutes: Routes = [
  { path: 'add-recipe', component: AddRecipeFormComponent, canActivate: [AuthGuard] },
  { path: 'sign-in', component: SignInFormComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: ':id', component: RecipeDetailComponent }
    ]
  },

]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}