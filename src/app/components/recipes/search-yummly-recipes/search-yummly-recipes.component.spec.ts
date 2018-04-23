import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchYummlyRecipesComponent } from './search-yummly-recipes.component';

describe('SearchYummlyRecipesComponent', () => {
  let component: SearchYummlyRecipesComponent;
  let fixture: ComponentFixture<SearchYummlyRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchYummlyRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchYummlyRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
