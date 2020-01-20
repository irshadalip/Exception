import { Component, Input} from '@angular/core';
import { Button } from 'protractor';
import { LogService } from './log.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


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
  
  constructor(private logService: LogService, private authService: AuthService, private router : Router) {
    this.recipes = [
      {
        name: 'Burger',
        chef: 'Ranveer Brar',
        image: 'http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg',
        type: 'nv'
      },
      {
        name: 'Italian Pasta',
        chef: 'JM',
        image: 'https://mariettasquaremarket.com/msm/wp-content/uploads/2018/12/Pita-Mediterranean-5.jpg',
        type: 'v'
      },
      {
        name: 'Chicken Maggie',
        chef: 'Nisha Madhulika',
        image: 'http://eatbook.sg/wp-content/uploads/2018/06/Century-Square-Food-Two-Hana.jpg',
        type: 'nv'
      },
      {
        name: 'Veg. Pulav',
        chef: 'Tarla Dalal',
        image: 'https://media-cdn.tripadvisor.com/media/photo-p/0e/75/7b/5d/photo3jpg.jpg',
        type: 'v'
      },
    ];
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
  onClickLogout(){
    this.authService.logout()
    this.logService.log('Logout');
    this.router.navigate(['/sign-in']);
  }
}
