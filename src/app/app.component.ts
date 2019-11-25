import { Component, Input} from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Team-Exception';
  recipes = [
    {
      name: 'Burger',
      chef: 'Ranveer Brar',
      image: 'http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg',
      type: 'Non-Veg'
    },
  ];
  addRecipe(value:{name:string,chef:string,image:string,type:string}){
    console.log("Hello")
    this.recipes.push({
      name: value.name,
      chef: value.chef,
      image: value.image,
      type: value.type,
    });
  }
}
