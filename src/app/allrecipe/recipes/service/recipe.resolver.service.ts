import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';
import { FavouriteHomeManagerService } from '../../../home/service/favourite-home.manager.service';
import { Recipe } from 'src/app/home/model/Recipe';

@Injectable()
export class RecipeResolver implements Resolve<Recipe> {
  constructor(private favouriteManagerService: FavouriteHomeManagerService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.favouriteManagerService.getFavouriteRecipe(1);
  }
}