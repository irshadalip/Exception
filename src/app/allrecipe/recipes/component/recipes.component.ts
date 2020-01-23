import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from '../../../logservice/log.service';
import { NewDataManagerService } from '../../addedrecipe/service/newdata-manager.service';

@Component({
  selector: 'app-recipes',
  templateUrl: '../../recipes/view/recipes.component.html',
  styleUrls: ['../../recipes/view/recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes = [];
  toggle = true;
  status = 'Enable';
  constructor(private logService: LogService, private route: Router, private newdataManagerService: NewDataManagerService) { }

  ngOnInit() {
    this.recipes = this.newdataManagerService.recipes;
  }
  openRecipeDetail(id: number) {
    this.logService.log("recipe click " + id)
    this.route.navigate(['/recipes', id]);
  }



}