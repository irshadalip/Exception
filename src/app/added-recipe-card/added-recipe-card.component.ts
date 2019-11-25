import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-added-recipe-card',
  templateUrl: './added-recipe-card.component.html',
  styleUrls: ['./added-recipe-card.component.scss']
})
export class AddedRecipeCardComponent implements OnInit {
  @Input() recipes = []
  constructor() {}

  ngOnInit() {
  }

}
