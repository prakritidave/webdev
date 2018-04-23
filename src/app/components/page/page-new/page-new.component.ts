import { Component, OnInit } from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  pageName: String;
  pageDesc: String;
  websiteId: String;
  userId: String;
  error: string;
  alert: string;
  errFlag: boolean; // flag to show/hide error alerts

  constructor(private pageService: PageService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.errFlag = false;
    this.error = 'Enter the name of the Page';
    this.alert = '* Enter the Page name';

    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.websiteId = params['websiteId'];
        this.userId = params['userId'];
        console.log('websiteId' + this.websiteId);
      }
    );
  }

  createNewPage() {
    if (this.pageName === '') {
      this.errFlag = true;
    } else {
      const newPage = {
        name: this.pageName,
        description: this.pageDesc
      };
      this.pageService.createPage(this.websiteId, newPage).subscribe((pages) => {
        console.log(pages);
        this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page']);
      });
    }

}

}
