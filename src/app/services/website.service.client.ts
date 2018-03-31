import { Injectable } from '@angular/core';
import { Website } from '../models/website.model.client';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class WebsiteService {

  baseUrl = environment.baseUrl;

  constructor(private http: Http) { }

  createWebsite(userId, website) {
    return this.http.post(this.baseUrl + '/api/user/' + userId + '/website', website).map((response: Response) => {
      return response.json();
    });
  }

  findWebsitesByUser(userId) {
    return this.http.get(this.baseUrl + '/api/user/' + userId + '/website').map((response: Response) => {
      console.log(response);
      return response.json();
    });
  }

  findWebsiteById(websiteId) {
    return this.http.get(this.baseUrl + '/api/website/' + websiteId).map((response: Response) => {
      return response.json();
    });
  }

  updateWebsite(websiteId, website) {
    return this.http.put(this.baseUrl + '/api/website/' + websiteId, website).map((response: Response) => {
      return response.json();
    });
  }

  deleteWebsite(websiteId) {
    return this.http.delete(this.baseUrl + '/api/website/' + websiteId).map((response: Response) => {
      return response.json();
    });
  }

}
