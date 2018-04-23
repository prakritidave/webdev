import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FoodService} from '../../../services/food.service.client';
import {ProjUserService} from '../../../services/project/projuser.service.client';

@Component({
  selector: 'app-search-yummly-recipes',
  templateUrl: './search-yummly-recipes.component.html',
  styleUrls: ['./search-yummly-recipes.component.css']
})
export class SearchYummlyRecipesComponent implements OnInit {
  searchText: any;
  matches: [any];
  userId: any;
  showDiv: boolean;
  selectedMatch: any;

  constructor(private foodService: FoodService,
              private projUserService: ProjUserService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.showDiv = false;
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['userId'];
    });
  }

  searchRecipes() {
    this.foodService.getIngredientList(this.searchText)
      .subscribe((res: any) => {
        // console.log(res);
        let val = res._body;
        val = JSON.parse(val);
        console.log(val);
        console.log(typeof (val));
        this.matches = val.matches;
        console.log(this.matches[0].recipeName);
      });
  }

  showRecipeDetails(match) {
    this.showDiv = !this.showDiv;
    this.selectedMatch = match;
  }

}
