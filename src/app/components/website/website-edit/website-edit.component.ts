import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  userId: any;
  websiteId: any;
  newWebsite: Website;
  websiteName: any;
  websiteDescription: any;
  websites: any;
  currWebsite: any;
  error: string;
  flag: false;
  alert: string;
  user: any;

  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.error = 'Enter the name of the website';
    this.alert = '* Enter the website name';
    this.user = this.sharedService.user;
   this.activatedRoute.params.subscribe( (params: any) => {
     // this.userId = params['userId'];
     this.userId = this.user._id;
     this.websiteId = params['websiteId'];
     this.websiteService.findWebsitesByUser(this.userId).subscribe((websitelist) => {
       // console.log(websitelist);
       this.websites = websitelist;
     });
     this.websiteService.findWebsiteById(this.websiteId).subscribe((websiteFromServer: Website) => {
       this.currWebsite = websiteFromServer;
       console.log(websiteFromServer.name);
       this.websiteName = websiteFromServer.name;
       this.websiteDescription = websiteFromServer.description;
     });
   });
}

  saveWebsiteDetails() {
      this.newWebsite = new Website(this.websiteId, this.websiteName, this.userId, this.websiteDescription);
      this.websiteService.updateWebsite(this.websiteId, this.newWebsite).subscribe((website) => {
        this.newWebsite = website;
        console.log(this.websiteName, this.websiteDescription);
        this.router.navigate(['/profile', this.userId, 'website']);
      });
  }

  deleteThisWebsite() {
      this.websiteService.deleteWebsite(this.websiteId).subscribe((newwebsites) => {
        this.websites = newwebsites;
        this.router.navigate(['/profile', this.userId, 'website']);
      });
  }

}
