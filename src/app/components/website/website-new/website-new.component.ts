import {Component, OnInit, ViewChild} from '@angular/core';
import { WebsiteService } from '../../../services/website.service.client';
import { Website} from '../../../models/website.model.client';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  userId: String;
  websiteName: String = ' ';
  websiteDescription: String= ' ';
  websites: Website [];
  newWebsite: Website;

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['userId'];
      }
    );
    this.websites = this.websiteService.findWebsitesByUser(this.userId);
    console.log(this.websites);
  }

  getWebsiteDetails() {
    console.log(this.websiteName);
    console.log(this.websiteDescription);
    //  this.newWebsite.name = this.websiteName;
    //   this.newWebsite.description = this.websiteDescription;
    this.newWebsite = new Website((new Date()).getTime() + '', this.websiteName, this.userId, this.websiteDescription);
    this.websiteService.createWebsite(this.userId, this.newWebsite);
    console.log(this.newWebsite);
  }

}
