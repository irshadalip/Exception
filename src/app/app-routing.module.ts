import { NgModule } from '@angular/core';
import { AuthGuard } from './auth-guard.service';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeFormComponent } from './add-recipe-form/add-recipe-form.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AddedRecipeCardComponent } from './added-recipe-card/added-recipe-card.component';
import { RecipeResolver } from './recipes/recipe.resolver.service';
import { RecipeDetailComponent } from './recipe-detail-card/recipe-detail.component';

const appRoutes : Routes = [
  {path : 'add-recipe', component : AddRecipeFormComponent , canActivate : [AuthGuard]},
  {path : 'sign-in',  component: SignInFormComponent},
  {path : 'home', component: HomeComponent},
  {path : '', component: HomeComponent  },
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: ':id', component: RecipeDetailComponent}
    ]
  },
  
]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}