import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormControl, FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';
import {RecipeService} from '../../../services/project/recipe.service.client';
import {ProjUserService} from '../../../services/project/projuser.service.client';


@Component({
  selector: 'app-edit-chef-recipe',
  templateUrl: './edit-chef-recipe.component.html',
  styleUrls: ['./edit-chef-recipe.component.css']
})
export class EditChefRecipeComponent implements OnInit {
  recipeId: any;
  recipe: any;
  userId: any;
  updatedRecipe: any;

  constructor(private activatedRoute: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.recipeId = params['recipeId'];
      this.userId = params['userId'];
      this.recipeService.findRecipeById(this.recipeId)
        .subscribe((res) => {
          this.recipe = res;
          console.log(this.recipe);
        });
    });
  }

  saveRecipe() {
    this.updatedRecipe = {
      _id: this.recipe._id,
      preptime: this.recipe.preptime,
      cooktime: this.recipe.cooktime,
      servings: this.recipe.servings,
      title: this.recipe.title,
      description: this.recipe.description,
      ingredients: this.recipe.ingredients,
      direction: this.recipe.direction
    };
    this.recipeService.updateRecipe(this.recipeId, this.updatedRecipe)
      .subscribe((res) => {
        this.recipe = res;
      });
    this.router.navigate(['/project/profile/', this.userId, 'recipe']);
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.recipeId).
      subscribe((res) => {
        console.log(res);
    })
    this.router.navigate(['/project/profile/', this.userId, 'recipe']);
  }

}
