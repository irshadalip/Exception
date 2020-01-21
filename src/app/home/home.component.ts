import { Component, OnInit } from '@angular/core';
import { DataManagementService } from '../dataManagement.service';
import { FavouriteHomeManagerService } from '../favorite-home.manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // searchLableText;
  recipes;
  result;
  constructor(private favouriteManager: FavouriteHomeManagerService) {
    this.recipes = favouriteManager.recipes;
  }

  ngOnInit() {
  }
  favRecipes() {
    // this.searchLableText = "Favourites"
    this.recipes = []
    this.favouriteManager.recipes.forEach(recipe => {
      this.recipes.push(recipe)
    });
  }

  onKey(event: any) {
    // this.searchLableText = "Search results for '" + event.target.value + ""
    if (event.target.value != ""){
      // this.datamanagement.searchRecipe(event.target.value)
      this.result = this.favouriteManager.searchFavouriteRecipe(event.target.value)
      console.log(this.result);
      this.recipes = this.result
    }else{
      this.favRecipes()
    }    
  }

  searchFavouriteRecipe(search: string) {
    let searchResult = this.favouriteManager.searchFavouriteRecipe(search)
    this.recipes = searchResult
    
  }

}
