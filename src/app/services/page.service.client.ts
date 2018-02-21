import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
// import 'rxjs/Rx';
import { Page } from '../models/page.model.client';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';


@Injectable()

export class PageService {
  pages: Page[] = [
    new Page('321', 'page321', '321', 'test page 321' ),
    new Page('111', 'page111', '111', 'test page 111' ),
    new Page('222', 'page222', '222', 'test page 222' ),
    new Page('333', 'page3', '333', 'test page 333' ),
    new Page('432', 'page432', '432', 'test page 432' ),
    new Page('234', 'page234', '234', 'test page 234' )
  ];

  constructor() {  }

  createPage(websiteId: String, page: Page) {
    const new_page = {
      _id: (new Date()).getTime() + '',
    name: page.name,
    websiteId: page.websiteId,
    description: page.description
    };
   this.pages.push(new_page);
  }

  findPageByWebsiteId(websiteId) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x].websiteId === websiteId) {
          return this.pages[x];
      }
    }
  }

  findPagesByWebsiteId(websiteId: String) {
    const resultSet = [];
    for ( const i in this.pages) {
      if (this.pages[i].websiteId === websiteId) {
        resultSet.push(this.pages[i]);
      }
    }
    return resultSet;
  }


  findPageById(pageId) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        return this.pages[x];
      }
    }
  }

  updatePage(pageId, page) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
          this.pages[x].websiteId = page.websiteId;
          this.pages[x].name = page.name;
          this.pages[x].description = page.description;
      }
    }
  }

  deletePage(pageId) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
          this.pages.splice(x, 1);
      }
    }
  }

}
