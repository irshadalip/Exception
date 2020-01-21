import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DataManagementService } from '../dataManagement.service';
import { LogService } from '../log.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-added-recipe-card',
  templateUrl: './added-recipe-card.component.html',
  styleUrls: ['./added-recipe-card.component.scss']
})
export class AddedRecipeCardComponent implements OnInit {
  
  @Input() recipes;
  private paramSubs: Subscription;
  constructor(private datamanagement: DataManagementService,private logService : LogService, private route : ActivatedRoute) {
  }

  ngOnInit() {
}

}
