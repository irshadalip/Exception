import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-add-recipe-form',
  templateUrl: './add-recipe-form.component.html',
  styleUrls: ['./add-recipe-form.component.scss']
})
export class AddRecipeFormComponent implements OnInit {
  @Input() recipes={
    name: String,
      chef: String,
      image: String,
      type: String,
      description: String,
  }
  @Output() addRecipe = new EventEmitter<{name: String,chef: String,image: String,type: String,description: String}>();
  constructor() { }

  ngOnInit() {
  }
  onClickAddRecipe(name: String,chef: String,image: String,type: String,description: String){
    this.addRecipe.emit({name: name,chef: chef,image: image,type: type,description:description});
  }
}
