import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { DataManagementService } from '../dataManagement.service';
import { LogService } from '../log.service';
import { Router } from '@angular/router';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-add-recipe-form',
  templateUrl: './add-recipe-form.component.html',
  styleUrls: ['./add-recipe-form.component.scss']
})
export class AddRecipeFormComponent implements OnInit {
  chef;
  name;
  type;
  image;
  description;
  constructor(private datamanagement: DataManagementService,private logService : LogService, private route:Router) {
  }
  ngOnInit() {
  }
  onClickAddRecipe() {
    this.datamanagement.addRecipe(this.name,this.chef,this.image,this.type,this.description);
    this.route.navigate(['/recipes'])
  }
}
