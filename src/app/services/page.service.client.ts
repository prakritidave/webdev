import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import { Page } from '../models/page.model.client';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class PageService {

  constructor(private http: Http) { }
  baseUrl = environment.baseUrl;

  createPage(websiteId, page) {
    return this.http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page).map((response: Response) => {
      return response.json();
    });
  }

  // findPageByWebsiteId(websiteId) {
  //   for (let x = 0; x < this.pages.length; x++) {
  //     if (this.pages[x].websiteId === websiteId) {
  //         return this.pages[x];
  //     }
  //   }
  // }

  findPagesByWebsiteId(websiteId) {
    return this.http.get(this.baseUrl + '/api/website/' + websiteId + '/page').map((response: Response) => {
      console.log(response);
      return response.json();
    });
  }


  findPageById(pageId) {
    return this.http.get(this.baseUrl + '/api/page/' + pageId ).map((response: Response) => {
      console.log(response);
      return response.json();
    });
  }

  updatePage(pageId, page) {
    return this.http.put(this.baseUrl + '/api/page/' + pageId, page).map((response: Response) => {
      return response.json();
    });
  }

  deletePage(pageId) {
    return this.http.delete(this.baseUrl + '/api/page/' + pageId).map((response: Response) => {
      return response.json();
    });
  }

}
