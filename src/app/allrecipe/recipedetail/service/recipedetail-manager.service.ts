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
        return this.http.get('http://35.160.197.175:3006/api/v1/recipe/' + id + '/details',
        )

    }

    public addToCookingList(id) {
        return this.http.post('http://35.160.197.175:3006/api/v1/recipe/add-to-cooking-list',
            {
                body: {
                    'recipeId': id
                }
            },
        )

    }

    public updateRecipeList() {
        return this.http.get('http://35.160.197.175:3006/api/v1/recipe/feeds',
        )
    }

    public updateFavouriteRecipeList() {
        return this.http.get('http://35.160.197.175:3006/api/v1/recipe/cooking-list',
        )
    }

    public deleteRecipeFromFeed(id){
        return this.http.delete('http://35.160.197.175:3006/api/v1/recipe/'+id)
    }


}
