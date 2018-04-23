import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {RecipeService} from '../../../services/project/recipe.service.client';
import {ProjUserService} from '../../../services/project/projuser.service.client';
import {Location} from '@angular/common';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit {
  recipeId: any;
  userId: any;
  recipe: any;

  constructor(private recipeService: RecipeService,
              private activatedRoute: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.recipeId = params['recipeId'];
      this.userId = params['userId'];
    });
    this.recipeService.findRecipeById(this.recipeId)
      .subscribe((res: any) => {
        console.log(res);
        this.recipe = res;
      });
  }

  goBack() {
    this.location.back();
  }

}
