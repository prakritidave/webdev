import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChefRecipeComponent } from './add-chef-recipe.component';

describe('AddChefRecipeComponent', () => {
  let component: AddChefRecipeComponent;
  let fixture: ComponentFixture<AddChefRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChefRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChefRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
