import { Component, OnInit } from '@angular/core';
import { DataManagementService } from '../dataManagement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // searchLableText;
  recipes;
  result;
  constructor(private datamanagement: DataManagementService) {
    this.recipes = datamanagement.recipes;
  }

  ngOnInit() {
  }
  favRecipes() {
    // this.searchLableText = "Favourites"
    this.recipes = []
    this.datamanagement.recipes.forEach(recipe => {
      this.recipes.push(recipe)
    });
  }

  onKey(event: any) {
    // this.searchLableText = "Search results for '" + event.target.value + ""
    if (event.target.value != ""){
      // this.datamanagement.searchRecipe(event.target.value)
      this.result = this.datamanagement.searchRecipe(event.target.value)
      console.log(this.result);
      this.recipes = this.result
    }else{
      this.favRecipes()
    }    
  }

  searchRecipe(search: string) {
    let searchResult = this.datamanagement.searchRecipe(search)
    this.recipes = searchResult
    
  }

}
