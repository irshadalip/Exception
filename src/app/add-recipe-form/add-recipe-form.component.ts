import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { DataManagementService } from '../dataManagement.service';
import { LogService } from '../log.service';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-add-recipe-form',
  templateUrl: './add-recipe-form.component.html',
  styleUrls: ['./add-recipe-form.component.scss']
})
export class AddRecipeFormComponent implements OnInit {
  constructor(private datamanagement: DataManagementService,private logService : LogService) {
  }
  ngOnInit() {
  }
  onClickAddRecipe(id:number,name: string, chef: string, image: string, type: string, description: string) {
    this.datamanagement.addRecipe(id, name,chef,image,type,description);
  }
}
