import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewDataManagerService } from '../service/newdata-manager.service';
import { LogService } from 'src/app/logservice/log.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-added-recipe-card',
  templateUrl: '../../addedrecipe/view/added-recipe-card.component.html',
  styleUrls: ['../../addedrecipe/view/added-recipe-card.component.scss']
})
export class AddedRecipeCardComponent implements OnInit {

  @Input() recipes;
  private paramSubs: Subscription;
  constructor(private dataManagerService: NewDataManagerService, private logService: LogService, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }
}
