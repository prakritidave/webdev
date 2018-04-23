import { Component, OnInit } from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {Website} from '../../../models/website.model.client';
import {UserService} from '../../../services/user.service.client';
import {WebsiteService} from '../../../services/website.service.client';
import {SharedService} from '../../../services/shared.service';

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
  errFlag: boolean;
  error: string;
  alert: string;
  user: any;
//  currPage: any;

 constructor(private pageService: PageService,
             private activatedRoute: ActivatedRoute,
             private router: Router,
             private sharedService: SharedService) { }

  ngOnInit() {
    this.errFlag = false;
    this.error = 'Enter the name of the Page';
    this.alert = '* Enter the Page name';

    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.pageId = params['pageId'];
        this.websiteId = params['websiteId'];
        // this.userId = params['userId'];
        this.user = this.sharedService.user;
        this.userId = this.user._id;

        this.pageService.findPageById(this.pageId).subscribe((page) => {
          console.log(page);
          // this.currPage = page;
          this.pageName = page.name;
          this.pageDescription = page.description;
        });


      }
    );
  }

  saveChanges() {
   // this.newPage = new Page((new Date()).getTime() + '', this.pageName, this.websiteId, this.pageDescription);
    if (this.pageName === '') {
      this.errFlag = true;
    } else {
      const newPage = {
        name: this.pageName,
        description: this.pageDescription,
      };
      this.pageService.updatePage(this.pageId, newPage).subscribe((updatedPage) => {
        this.newPage = updatedPage;
        this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page']);
      });
    }
  }

  deleteThisPage() {
   this.pageService.deletePage(this.pageId).subscribe((pages) => {
     console.log(pages);
     this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page']);
   });
  }

}
