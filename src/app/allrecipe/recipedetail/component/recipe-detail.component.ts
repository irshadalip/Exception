import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { FavouriteHomeManagerService } from '../../../home/service/favourite-home.manager.service';
import { ActivatedRoute } from '@angular/router';
import { NewDataManagerService } from '../../addedrecipe/service/newdata-manager.service';
import { LogService } from 'src/app/logservice/log.service';
import { Recipe } from 'src/app/home/model/Recipe';
import { Router, NavigationExtras } from '@angular/router'
import { RecipeDetailManagerService } from '../service/recipedetail-manager.service';
import { element } from 'protractor';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: '../../recipedetail/view/recipe-detail.component.html',
  styleUrls: ['../../recipedetail/view/recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  @Input() recipe;
  private paramSubs: Subscription;
  favouriteRecipeId: string;

  constructor(
    private newdataManagerService: NewDataManagerService,
    private route: ActivatedRoute,
    private favouriteHomeManagerService: FavouriteHomeManagerService,
    private loggerService : LogService,
    private recipeDetailManagerService : RecipeDetailManagerService
  ) { }

  ngOnInit() {
   const id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log('getting recipe id'+id)
    this.route.paramMap.subscribe(
      data => {
        this.favouriteRecipeId = data.get('id')
        const getRecipeId  = data.get('id')
        console.log("RECIPE"+getRecipeId);
        this.recipeDetailManagerService.dataByApi(data.get('id')).then((response)=>{
            this.recipe = response
        })
        
      }
    );



  }

  ngOnDestroy() {
    if (this.paramSubs) {
      this.paramSubs.unsubscribe();
    }
  }
  onClickFavourite() {
   this.recipeDetailManagerService.addToCookingList(this.favouriteRecipeId).then((response)=>{
      this.recipeDetailManagerService.updateRecipeList().then((response)=>{
        this.recipeDetailManagerService.updateFavouriteRecipeList().then((response)=>{
          this.recipeDetailManagerService.dataByApi(this.favouriteRecipeId).then((response)=>{
            this.newdataManagerService.dataByApi()
        })
        }).catch((err : Error) => {
            throw err;
        });
      }).catch((err : Error) => {
        throw err;
      });
   }).catch((err : Error) => {
     throw err;
   }).catch((err : Error) => {
    throw err;
  })
  }

  onClickRemoveFromFavourite(){
    this.recipeDetailManagerService.removeFromCookingList(this.favouriteRecipeId).then((response)=>{
      this.recipeDetailManagerService.updateRecipeList().then((response)=>{
        this.recipeDetailManagerService.updateFavouriteRecipeList().then((response)=>{
          this.recipeDetailManagerService.dataByApi(this.favouriteRecipeId).then((response)=>{
            this.newdataManagerService.dataByApi()
        })
        }).catch((err : Error) => {
            throw err;
        });
      }).catch((err : Error) => {
        throw err;
      });
   }).catch((err : Error) => {
     throw err;
   }).catch((err : Error) => {
    throw err;
  })
  }

 

  
  
}