import { Injectable } from '@angular/core';
import { Website } from '../models/website.model.client';
import {Http, RequestOptions, Response} from '@angular/http';
// import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class WebsiteService {

  websites: Website[] = [
    new Website('321', 'Facebook', '123', 'test' ),
    new Website('111', 'Facebook1', '123', 'test' ),
    new Website('222', 'Facebook2', '123', 'test' ),
    new Website('333', 'Facebook3', '123', 'test' ),
    new Website('432', 'Twitter', '456', 'test' ),
    new Website('891', 'anotherFacebook', '456', 'test'),
    new Website('667', 'Gizmodo', '456', 'test'),
    new Website('234', 'Amazon', '234', 'test' ),
  ];

  createWebsite(userId: String, website: Website) {

    const new_website = {
      _id: (new Date()).getTime() + '',
      name: website.name,
      developerId: userId,
      description: website.description
    };
    console.log('new website created!');

   this.websites.push(new_website);
  }

  findWebsitesByUser(userId: String) {
    const userWebsites = [];
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x].developerId === userId) {
           userWebsites.push(this.websites[x]);
      }
    }
    return userWebsites;
  }

  findWebsiteById(websiteId) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        return this.websites[x];
      }
    }
  }

  updateWebsite(websiteId, website) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
          this.websites[x].developerId = website.developerId;
          this.websites[x].description = website.description;
          this.websites[x].name = website.name;
          console.log('updated website' + websiteId);
          break;
//          return this.websites[x];
      }
    }
  }

  deleteWebsite(websiteId) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        this.websites.splice(x, 1);
        console.log('deleted website' + websiteId);
      }
    }
  }

}
