import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { FavouriteHomeManagerService } from '../../../home/service/favourite-home.manager.service';
import { ActivatedRoute } from '@angular/router';
import { NewDataManagerService } from '../../addedrecipe/service/newdata-manager.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: '../../recipedetail/view/recipe-detail.component.html',
  styleUrls: ['../../recipedetail/view/recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  @Input() recipe;
  private paramSubs: Subscription;

  constructor(
    private newdataManagerService: NewDataManagerService,
    private route: ActivatedRoute,
    private favouriteHomeManagerService: FavouriteHomeManagerService
  ) { }

  ngOnInit() {

    const id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.route.paramMap.subscribe(
      data => {
        console.log(data.get('id'));
        this.newdataManagerService.recipes.forEach(element => {
          if (parseInt(data.get('id')) === element.id) {
            this.recipe = element;
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
  onClickFavourite(id: number, name: string, chef: string, image: string, type: string, description: string) {
    this.favouriteHomeManagerService.addFavouriteRecipe(id, name, chef, image, type, description);
  }

}