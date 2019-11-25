import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-added-recipe-card',
  templateUrl: './added-recipe-card.component.html',
  styleUrls: ['./added-recipe-card.component.scss']
})
export class AddedRecipeCardComponent implements OnInit {

   recipes = [
    {
      name: 'Burger',
      chef: 'Ranveer Brar',
      image: 'http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg',
      type: 'Non-Veg'
    },
    {
      name: 'Italian Pasta',
      chef: 'JM',
      image: 'https://mariettasquaremarket.com/msm/wp-content/uploads/2018/12/Pita-Mediterranean-5.jpg',
      type: 'Veg'
    },
    {
      name: 'Chicken Maggie',
      chef: 'Nisha Madhulika',
      image: 'http://eatbook.sg/wp-content/uploads/2018/06/Century-Square-Food-Two-Hana.jpg',
      type: 'Non-Vgv'
    },
    {
      name: 'Veg. Pulav',
      chef: 'Tarla Dalal',
      image: 'https://media-cdn.tripadvisor.com/media/photo-p/0e/75/7b/5d/photo3jpg.jpg',
      type: 'Veg'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
