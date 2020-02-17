import { Injectable } from "@angular/core";
import { LogService } from 'src/app/logservice/log.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from 'src/app/home/model/Recipe';
import { FavouriteHomeManagerService } from 'src/app/home/service/favourite-home.manager.service';
import { NewDataManagerService } from '../../addedrecipe/service/newdata-manager.service';

@Injectable()
export class RecipeDetailManagerService {
    recipe ;
  constructor(private loggerService : LogService , private http : HttpClient, private homeManager  : FavouriteHomeManagerService, private newManager  : NewDataManagerService){

  }

  dataByApi(id){
    console.log("Enter API")
    this.loggerService.log("API starts")
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.MGBf-reNrHdQuwQzRDDNPMo5oWv4GlZKlDShFAAe16s');
    this.http.get('http://35.160.197.175:3006/api/v1/recipe/'+id+'/details',
    {headers : headers}
    ).subscribe((response)=>{
       console.log("Recipe Detail "+response['name'])
        this.recipe = response
    })
    return this.recipe;
}

    addToCookingList(id){
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json')
    headers = headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.MGBf-reNrHdQuwQzRDDNPMo5oWv4GlZKlDShFAAe16s');
        this.http.post('http://35.160.197.175:3006/api/v1/recipe/add-to-cooking-list',
        {body:{
            'recipeId' : 603
          }
        },
        {headers : headers}
        ).subscribe((response)=>{
            console.log(response+""+id)
            this.newManager.dataByApi()
            this.homeManager.dataByApi()
        })
        
    }
}
