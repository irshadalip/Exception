import { Injectable } from "@angular/core";
import { LogService } from 'src/app/logservice/log.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FavouriteHomeManagerService } from 'src/app/home/service/favourite-home.manager.service';
import { NewDataManagerService } from '../../addedrecipe/service/newdata-manager.service';

@Injectable()
export class RecipeDetailManagerService {
    recipe;
    constructor(private loggerService: LogService, private http: HttpClient, private homeManager: FavouriteHomeManagerService, private newManager: NewDataManagerService) {

    }

    public dataByApi(id) {
        // return this.http.get('http://35.160.197.175:3006/api/v1/recipe/' + id + '/details',
        // )
        return new Promise((resolve, reject) => {
            this.http.get('http://35.160.197.175:3006/api/v1/recipe/' + id + '/details',
            ).subscribe(res => {
                resolve(res);
            }, err => {
                reject(err.error);
            });
        });
 
    }

    public addToCookingList(id) {
        const body = {
            'recipeId' : id
        };
        return new Promise((resolve, reject) => {
            this.http.post('http://35.160.197.175:3006/api/v1/recipe/add-to-cooking-list',
           body     
            ).subscribe(res => {
                resolve(res);
            }, err => {
                reject(err.error);
            });
        });
 

    }

    public removeFromCookingList(id){
        const body = {
            'recipeId' : id
        };
        return new Promise((resolve, reject) => {
            this.http.post('http://35.160.197.175:3006/api/v1/recipe/rm-from-cooking-list',
           body     
            ).subscribe(res => {
                resolve(res);
            }, err => {
                reject(err.error);
            });
        });
 
    }

    public updateRecipeList() {
        return new Promise((resolve, reject) => {
                 this.http.get('http://35.160.197.175:3006/api/v1/recipe/feeds').subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err.error);
        });

        })};

    public updateFavouriteRecipeList() {
        return new Promise((resolve, reject) => {
             this.http.get('http://35.160.197.175:3006/api/v1/recipe/cooking-list').subscribe(res => {
                resolve(res);
            }, err => {
                reject(err.error);
    });

    });
}

   


}
