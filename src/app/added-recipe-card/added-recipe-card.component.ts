import { Component, OnInit, Input } from '@angular/core';
import { DataManagementService } from '../dataManagement.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-added-recipe-card',
  templateUrl: './added-recipe-card.component.html',
  styleUrls: ['./added-recipe-card.component.scss']
})
export class AddedRecipeCardComponent implements OnInit {
  
  recipes;
  constructor(private datamanagement: DataManagementService,private logService : LogService) {
    this.recipes = datamanagement.recipes;
  }

  ngOnInit() {
  }

}
