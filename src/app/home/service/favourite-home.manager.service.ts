
import {Recipe} from 'src/app/home/model/Recipe';
import { LogService } from 'src/app/logservice/log.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class FavouriteHomeManagerService {
   
    constructor(private logger : LogService , private http : HttpClient){

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

    dataByApi(){
        console.log("Enter API")
        let getRecipes = []
        this.logger.log("API starts")
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.MGBf-reNrHdQuwQzRDDNPMo5oWv4GlZKlDShFAAe16s');
        this.http.get('http://35.160.197.175:3006/api/v1/recipe/cooking-list',
        {headers : headers}
        ).subscribe((response)=>{
           console.log("Recipe List "+response[0].name)
            for(var item in response){
              getRecipes.push(response[item]);
              console.log("Recipe List "+response[item].name+ "Get Recipe"+getRecipes['name'])
            }
        })
        this.recipes =getRecipes
        return this.recipes;
    }
}
