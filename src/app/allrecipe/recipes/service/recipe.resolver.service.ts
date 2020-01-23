import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Recipe } from '../../../newrecipe/model/recipe';
import { Injectable } from '@angular/core';
import { FavouriteHomeManagerService } from '../../../home/service/favourite-home.manager.service';

@Injectable()
export class RecipeResolver implements Resolve<Recipe> {
  constructor(private favouriteManagerService: FavouriteHomeManagerService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.favouriteManagerService.getFavouriteRecipe(+route.params.id);
  }
}