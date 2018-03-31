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
  websiteId: any;
  userId: any;
  pageId: any;
  pageName: any;
  pageDescription: any;
  newPage: any;
//  currPage: any;

 constructor(private pageService: PageService,
             private activatedRoute: ActivatedRoute,
             private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.pageId = params['pageId'];
        this.pageService.findPageById(this.pageId).subscribe((page) => {
          console.log(page);
          // this.currPage = page;
          this.pageName = page.name;
          this.pageDescription = page.description;
        });
        this.websiteId = params['websiteId'];
        this.userId = params['userId'];

      }
    );
  }

  saveChanges() {
   // this.newPage = new Page((new Date()).getTime() + '', this.pageName, this.websiteId, this.pageDescription);
   const newPage = {
     name: this.pageName,
     description: this.pageDescription,
   };
   this.pageService.updatePage(this.pageId, newPage).subscribe((updatedPage) => {
     this.newPage = updatedPage;
     this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page']);
   });
  }

  deleteThisPage() {
   this.pageService.deletePage(this.pageId).subscribe((pages) => {
     console.log(pages);
     this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page']);
   });
  }

}
