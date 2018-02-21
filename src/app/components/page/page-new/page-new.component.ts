import { Component, OnInit } from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';

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

  constructor(private pageService: PageService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.websiteId = params['websiteId'];
        this.userId = params['userId'];
        console.log('websiteId' + this.websiteId);
      }
    );
  }

  createNewPage() {
    this.pageService.createPage(this.websiteId,
      new Page((new Date()).getTime() + '', this.pageName,
      this.websiteId, this.pageDesc));
}

}
