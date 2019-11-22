import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedRecipeCardComponent } from './added-recipe-card.component';

describe('AddedRecipeCardComponent', () => {
  let component: AddedRecipeCardComponent;
  let fixture: ComponentFixture<AddedRecipeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedRecipeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedRecipeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
