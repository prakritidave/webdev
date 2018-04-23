import {Http} from '@angular/http';
import {Injectable} from '@angular/core';


@Injectable()
export class FoodService {
   APPKEY = '2e76682876f7b5b9ccf2b29d144f2b2b';
   APPID = 'a5706053';
   items = [];
   url: any;
  // urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
  foodUrlBase = 'https://api.yummly.com/v1/api/recipes?_app_id=APPID&_app_key=APPKEY&q=PARAM';

// Possible values are: dairy, egg, gluten, peanut, sesame, seafood, shellfish, soy, sulfite, tree nut, and wheat.
  constructor (private http: Http) {}

  getIngredientList (foodTerm: any) {

    this.url = this.foodUrlBase
      .replace('APPID', this.APPID)
      .replace('APPKEY', this.APPKEY)
      .replace('PARAM', foodTerm);

    return this.http.get(this.url);
  }

}
