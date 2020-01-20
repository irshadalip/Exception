import { Component, Input} from '@angular/core';
import { Button } from 'protractor';
import { LogService } from './log.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[LogService]
})
export class AppComponent {
  count = 0;
  title = 'Team-Exception';
  recipes = [];
  
  constructor(private logService: LogService) {
    
  }

  addRecipe(value:{name:string,chef:string,image:string,type:string,description:string}){
    console.log("Hello")
    this.recipes.push({
      name: value.name,
      chef: value.chef,
      image: value.image,
      type: value.type,
      description: value.description,
    });
    this.logService.log('new recipe added');
  }
}
