
import {Recipe} from 'src/app/home/model/Recipe';
import { LogService } from 'src/app/logservice/log.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Injectable()
export class FavouriteHomeManagerService {
   
    constructor(private logger : LogService , private http : HttpClient, private spinnerService: Ng4LoadingSpinnerService){

    }

    recipes = [];

    addFavouriteRecipe(id: number, name: string, chef: string, image: string, type: string, description: string) {
        // if (this.recipes.length != 0) {
        //     id = this.recipes.length + 1;
        //     this.recipes.push({ id, name, chef, image, type, description })
        // } else {
        //     this.recipes.push({ id, name, chef, image, type, description })
        // }

    }
    searchFavouriteRecipe(keyword: string) {
        let searched = [];
        this.recipes.forEach((value, index) => {
            if (value.name.search(`([a-zA-z]*${keyword}[a-zA-z]*)+`) != -1) {
                searched.push(value);
            }
        })
        return searched
    }

    getFavouriteRecipe(byId: number) {
        return this.recipes[byId];
    }

    public dataByApi(){
        this.spinnerService.show();//show the spinner
        let getRecipes = []
        this.http.get('http://35.160.197.175:3006/api/v1/recipe/cooking-list',
        ).subscribe((response)=>{
            for(var item in response){
              getRecipes.push(response[item]);
            }
            this.spinnerService.hide();//show the spinner
        })
        this.recipes =getRecipes
        return this.recipes;
    }
}
