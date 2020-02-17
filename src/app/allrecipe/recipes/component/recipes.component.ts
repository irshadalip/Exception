import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from '../../../logservice/log.service';
import { NewDataManagerService } from '../../addedrecipe/service/newdata-manager.service';
import { Recipe } from 'src/app/home/model/Recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: '../../recipes/view/recipes.component.html',
  styleUrls: ['../../recipes/view/recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes : Recipe[];
  toggle = true;
  status = 'Enable';
  constructor(private logService: LogService, private route: Router, private newdataManagerService: NewDataManagerService) {
    this.recipes = this.newdataManagerService.dataByApi();
    console.log("recipes areeeeeeeeee",this.recipes);
   }

  ngOnInit() {
  }
  openRecipeDetail(id: number) {
    this.logService.log("recipe click " + id)
    this.route.navigate(['/recipes', id]);
  }



}