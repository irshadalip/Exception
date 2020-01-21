import { Component, OnInit } from '@angular/core';
import { DataManagementService } from '../dataManagement.service';
import { Router } from '@angular/router';
import { FavouriteHomeManagerService } from '../favorite-home.manager.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes = [];
    toggle = true;
  status = 'Enable'; 
  constructor(private logService : LogService,private favouriteManager: FavouriteHomeManagerService, private route  : Router, private dataManagerService: DataManagementService) { }

  ngOnInit() {
    this.recipes = this.dataManagerService.recipes;
  }
  openRecipeDetail(id : number){
    this.logService.log("recipe click "+id)
    this.route.navigate(['/recipes', id]);
  }
  
  
 
}