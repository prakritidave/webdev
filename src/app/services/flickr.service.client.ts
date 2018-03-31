import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class FlickrService {

  key = '7ae5a1810952d12b8eb815fbf4aff0fc';
  secret = '8f0549cc12af42b2';
  urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';

  constructor(private _http: Http) {}

  searchPhotos(searchTerm: any) {
    const url = this.urlBase
      .replace('API_KEY', this.key)
      .replace('TEXT', searchTerm);
    return this._http.get(url);
  }

}
