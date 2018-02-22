import { Component, OnInit } from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {Website} from '../../../models/website.model.client';
import {UserService} from '../../../services/user.service.client';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  websiteId: String;
  userId: String;
  pageId: String;
  pageName: String;
  pageDescription: String;

 constructor(private pageService: PageService,
             private activatedRoute: ActivatedRoute,
             private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.websiteId = params['websiteId'];
        this.userId = params['userId'];
        this.pageId = params['pageId'];
      }
    );
  }

  saveChanges() {
   this.pageService.updatePage(this.pageId,
     new Page((new Date()).getTime() + '', this.pageName,
       this.websiteId, this.pageDescription));
    this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page']);
  }

  deleteThisPage() {
   this.pageService.deletePage(this.pageId);
   this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page']);

  }

}
