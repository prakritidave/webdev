import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormControl, FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';
import {Location} from '@angular/common';
import {ProjUserService} from '../../../../services/project/projuser.service.client';
import {RecipeService} from '../../../../services/project/recipe.service.client';

@Component({
  selector: 'app-add-chef-recipe',
  templateUrl: './add-chef-recipe.component.html',
  styleUrls: ['./add-chef-recipe.component.css']
})
export class AddChefRecipeComponent implements OnInit {

  preptime: any;
  cooktime: any;
  servings: any;
  title: any;
  description: any;
  ingredients: any;
  direction: any;
  alert: any;
  error: any;
  flag: any;
  userId: any;
  newRecipe: any;

  constructor(private recipeService: RecipeService,
              private projUserService: ProjUserService,
              private activatedRoute: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['userId'];
    });

  }

  saveRecipe() {
    this.newRecipe = {
      title: this.title,
      description: this.description,
      ingredients: this.ingredients,
      preptime: this.preptime,
      cooktime: this.cooktime,
      servings: this.servings,
      direction: this.direction
    };
    this.recipeService.createRecipe(this.userId, this.newRecipe)
      .subscribe((res: any) => {
        console.log(res);
      });
    this.location.back();
  }



}
