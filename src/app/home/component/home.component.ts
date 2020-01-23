import { Component, OnInit } from '@angular/core';
import { FavouriteHomeManagerService } from '../service/favourite-home.manager.service';

@Component({
  selector: 'app-home',
  templateUrl: '../../home/view/home.component.html',
  styleUrls: ['../../home/view/home.component.scss']
})
export class HomeComponent implements OnInit {

  recipes;
  result;
  constructor(private favouriteManagerService: FavouriteHomeManagerService) {
    this.recipes = favouriteManagerService.recipes;
  }

  ngOnInit() {
  }
  favRecipes() {
    this.recipes = []
    this.favouriteManagerService.recipes.forEach(recipe => {
      this.recipes.push(recipe)
    });
  }

  onKey(event: any) {
    if (event.target.value != "") {
      this.result = this.favouriteManagerService.searchFavouriteRecipe(event.target.value)
      console.log(this.result);
      this.recipes = this.result
    } else {
      this.favRecipes()
    }
  }

  searchFavouriteRecipe(search: string) {
    let searchResult = this.favouriteManagerService.searchFavouriteRecipe(search)
    this.recipes = searchResult

  }

}
