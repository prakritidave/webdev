import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ProjUserService} from '../../../services/project/projuser.service.client';
import {RecipeService} from '../../../services/project/recipe.service.client';
import {Location} from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  userId: any;
  chefId: any;
  currUser: any;
  recipes: [any];
  userViewOnly: boolean;
  currchef: any;

  constructor(private projUserService: ProjUserService,
              private activatedRoute: ActivatedRoute,
              private recipeService: RecipeService,
              private location: Location) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['userId'];
      this.chefId = params['chefId'];
      console.log(this.chefId);
      if (this.chefId === undefined) {
        this.userViewOnly = false;
      } else {
        this.userViewOnly = true;
      }

      console.log(this.userViewOnly);
      if (!this.userViewOnly) {
        this.projUserService.findUserById(this.userId).subscribe((resUser) => {
          this.currUser = resUser;
          console.log(this.currUser);

          if (this.currUser.usertype === 'chef') {
            this.recipeService.findAllRecipesForUser(this.userId)
              .subscribe((allrecipes: any) => {
                this.recipes = allrecipes;
                console.log(this.recipes);
              });
          } else {
            this.recipes = this.currUser.recipes;
          }
        });
      } else {
        this.recipeService.findAllRecipesForUser(this.chefId)
          .subscribe((recipelist) => {
            this.recipes = recipelist;
          });
      }

    });

   }

   goBack() {
    this.location.back();
   }

  }

