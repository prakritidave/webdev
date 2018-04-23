import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChefRecipeComponent } from './edit-chef-recipe.component';

describe('EditChefRecipeComponent', () => {
  let component: EditChefRecipeComponent;
  let fixture: ComponentFixture<EditChefRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChefRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChefRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
