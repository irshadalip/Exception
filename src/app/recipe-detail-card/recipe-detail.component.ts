import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { FavouriteHomeManagerService } from '../favorite-home.manager.service';
import { ActivatedRoute } from '@angular/router';
import { DataManagementService } from '../dataManagement.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.scss']
  })
  export class RecipeDetailComponent implements OnInit, OnDestroy {
    @Input() recipe;
    private paramSubs: Subscription;
  
    constructor(
      private dataManager: DataManagementService,
      private route: ActivatedRoute,
      private favouriteHomeManager  :FavouriteHomeManagerService
    ) { }
  
    ngOnInit() {
       
    //   const id = this.route.snapshot.params.id;
    //   console.log("ID"+id)
    //     this.route.data.subscribe((data) => {
    //         this.dataManager.recipes.forEach(element => {
    //             if(element.id === data.id){
    //                 this.recipe = element;
    //                 console.log(element)
    //             }
    //         });
         
    //     });
        // this.recipe = this.recipeManagerService.getRecipe(id);
        // this.paramSubs = this.route.params.subscribe((params) => {
        //   this.recipe = this.recipeManagerService.getRecipe(params.id);
        // });

        const id = parseInt(this.route.snapshot.paramMap.get('id'));

        this.route.paramMap.subscribe(
          data => {
            console.log(data.get('id'));
            this.dataManager.recipes.forEach(element => {
              if ( parseInt(data.get('id')) === element.id) {
                this.recipe = element;
                console.log('From detail screen == ' + element);
              }
            });
          }
        );



          }
  
    ngOnDestroy() {
      if (this.paramSubs) {
        this.paramSubs.unsubscribe();
      }
    }
    onClickFavourite(id:number,name: string, chef: string, image: string, type: string, description: string){
        this.favouriteHomeManager.addFavouriteRecipe(id, name,chef,image,type,description);
      }
    
  }