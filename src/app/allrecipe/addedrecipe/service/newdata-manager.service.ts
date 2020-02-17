import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LogService } from 'src/app/logservice/log.service';
import { Injectable } from '@angular/core';

@Injectable()
export class NewDataManagerService {

    constructor(private logger : LogService , private http : HttpClient){

    }


    recipes = [];
        
    addRecipe(name: string, chef: string, image: string, type: string, description: string) {
        if (this.recipes.length != 0) {
            console.log("length" + this.recipes.length)
            var id: number = this.recipes.length + 1;
            this.recipes.push({ id, name, chef, image, type, description })
        } else {
            this.recipes.push({ id, name, chef, image, type, description })
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

    dataByApi(){
        console.log("Enter API")
        let getRecipes = []
        this.logger.log("API starts")
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.MGBf-reNrHdQuwQzRDDNPMo5oWv4GlZKlDShFAAe16s');
        this.http.get('http://35.160.197.175:3006/api/v1/recipe/feeds',
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