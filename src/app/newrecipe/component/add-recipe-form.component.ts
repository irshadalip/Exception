import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewDataManagerService } from '../../allrecipe/addedrecipe/service/newdata-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe-form',
  templateUrl: '../../newrecipe/view/add-recipe-form.component.html',
  styleUrls: ['../../newrecipe/view/add-recipe-form.component.scss']
})
export class AddRecipeFormComponent implements OnInit {
  chef;
  name;
  type;
  image;
  description;
  constructor(private newDataManagerService: NewDataManagerService, private route: Router) {
  }
  ngOnInit() {
  }
  onClickAddRecipe() {
    this.newDataManagerService.addRecipe(this.name, this.chef, this.image, this.type, this.description);
    this.route.navigate(['/recipes'])
  }
}
