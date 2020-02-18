import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LogService } from 'src/app/logservice/log.service';
import { Injectable } from '@angular/core';

@Injectable()
export class NewDataManagerService {

    constructor(private logger : LogService , private http : HttpClient){

    }


    recipes = [];
        
    addRecipe(recipeName: string, preprationTime: string, serves: string, complexity: string, metaTags: string[],youtubeUrl :string, ingredients : string[], instructions : string[]) {
        if (this.recipes.length != 0) {
            console.log("length" + this.recipes.length)
            var recipeId: number = this.recipes.length + 1;
            this.addRecipeToFeedList(recipeName, preprationTime,serves, complexity,metaTags , youtubeUrl)
            //this.recipes.push({ recipeId, recipeName, , image, type, description })
        } else {
          //  this.recipes.push({ recipeId, name, chef, image, type, description })
        }

    }
    searchRecipe(keyword: string) {
        let searched = [];
        this.recipes.forEach((value, index) => {
            if (value.name.search(`([a-zA-z]*${keyword}[a-zA-z]*)+`) != -1) {
                searched.push(value);
            }
        })
        return searched
    }

    getRecipe(byId: number) {
        return this.recipes[byId];
    }

    addRecipeToFeedList(recipeName, preprationTime,serves, complexity,metaTags , youtubeUrl){
        console.log("Enter into add recipe"+recipeName)
        const body = {
            'name' : recipeName,
            'preprationTime' : preprationTime,
            'serves' : serves,
            'complexity' : complexity,
            'metaTags' : metaTags,
            'ytUrl' : youtubeUrl
        }
        this.http.post('http://35.160.197.175:3006/api/v1/recipe/add',
            body
        ).subscribe((response)=>{
            console.log(response)
            console.log('succcessfully servive')
        })
    }

    dataByApi(){
        console.log("Enter API")
        let getRecipes = []
        this.logger.log("API starts")
        this.http.get('http://35.160.197.175:3006/api/v1/recipe/feeds',
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