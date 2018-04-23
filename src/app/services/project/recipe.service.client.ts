import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {SharedService} from '../shared.service';

@Injectable()
export class RecipeService {

  constructor(private http: Http) {}
  baseUrl = environment.baseUrl;

  createRecipe(projUserId, recipe) {
    return this.http.post(this.baseUrl + '/api/project/' + projUserId + '/recipe', recipe).map((response: Response) => {
      return response.json();
    });
  }

  findAllRecipesForUser(userId) {
    return this.http.get(this.baseUrl + '/api/project/' + userId + '/recipe').map((response: Response) => {
      return response.json();
    });
  }

  findRecipeById(recipeId) {
    return this.http.get(this.baseUrl + '/api/project/' + recipeId).map((response: Response) => {
      console.log(response);
      return response.json();
    });
  }

  updateRecipe(recipeId, recipe) {
    return this.http.put(this.baseUrl + '/api/project/' + recipeId, recipe).map((response: Response) => {
      return response.json();
    });
  }

  deleteRecipe(recipeId) {
    return this.http.delete(this.baseUrl + '/api/project/' + recipeId).map((response: Response) => {
      return response.json();
    });
  }

}
