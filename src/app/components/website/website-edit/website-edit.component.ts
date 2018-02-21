import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  userId: String;
  websiteId: String;
  websiteName: String;
  websiteDescription: String;
  websites: Website [];

  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
   this.activatedRoute.params.subscribe( (params: any) => {
     this.userId = params['userId'];
     this.websiteId = params['websiteId'];
     this.websites = this.websiteService.findWebsitesByUser(this.userId);
   });
}

  saveWebsiteDetails() {
    this.websiteService.updateWebsite(this.websiteId,
      new Website(this.websiteId, this.websiteName, this.userId , this.websiteDescription));
    console.log(this.websiteName, this.websiteDescription);
    this.router.navigate(['/profile', this.userId , 'website']);
  }

  deleteThisWebsite() {
    this.websiteService.deleteWebsite(this.websiteId);
    this.router.navigate(['/profile', this.userId , 'website']);
  }

}
