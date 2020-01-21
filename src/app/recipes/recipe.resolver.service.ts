import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
  } from '@angular/router';
  import { Recipe } from '../recipe';
  import { Injectable } from '@angular/core';
import { DataManagementService } from '../dataManagement.service';
import { FavouriteHomeManagerService } from '../favorite-home.manager.service';
  
  @Injectable()
  export class RecipeResolver implements Resolve<Recipe> {
    constructor(private favouriteManager: FavouriteHomeManagerService) { }
  
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return this.favouriteManager.getFavouriteRecipe(+route.params.id);
    }
  }