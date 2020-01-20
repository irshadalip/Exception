import { NgModule } from '@angular/core';
import { AuthGuard } from './auth-guard.service';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeFormComponent } from './add-recipe-form/add-recipe-form.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';

const appRoutes : Routes = [
  {path : 'add-recipe', component : AddRecipeFormComponent , canActivate : [AuthGuard]},
  {path : 'sign-in',  component: SignInFormComponent},

]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}