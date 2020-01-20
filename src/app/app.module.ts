import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddedRecipeCardComponent } from './added-recipe-card/added-recipe-card.component';
import { AddRecipeFormComponent } from './add-recipe-form/add-recipe-form.component';
import { HighLightCard } from  './app.overDirective';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import {FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { AppRoutingModule } from './app-routing.module';

 
@NgModule({
  declarations: [
    AppComponent,
    AddedRecipeCardComponent,
    AddRecipeFormComponent,
    SignInFormComponent,
    HighLightCard
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
