import {Component, OnInit, ViewChild} from '@angular/core';
import { WebsiteService } from '../../../services/website.service.client';
import { Website} from '../../../models/website.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;

  userId: any;
  websiteName: any = ' ';
  websiteDescription: any = ' ';
  websites: any;
  user: any;
  error = 'Enter the name of the website';
  alert = '* Enter the website name';
  flag = false;

  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.user = this.sharedService.user;
        // this.userId = params['userId'];
        this.userId = this.user._id;
         this.websiteService.findWebsitesByUser(this.userId).subscribe((websites) => {
          this.websites = websites;
          console.log(this.websites);
        });
      }
    );
  }

  getWebsiteDetails() {
    if (this.websiteName === '') {
      this.flag = true;
    }
    console.log(this.websiteName);
    console.log(this.websiteDescription);

    const newWebsite = {
      name: this.websiteName,
      description: this.websiteDescription
    };
    // this.newWebsite = new Website((new Date()).getTime() + '', this.websiteName, this.userId, this.websiteDescription);
    //  this.newWebsite.name = this.websiteName;
    //   this.newWebsite.description = this.websiteDescription;
    this.websiteService.createWebsite(this.userId, newWebsite).subscribe( (createdwebsite) => {
      console.log(createdwebsite);
      this.router.navigate(['/profile', this.userId, 'website']);
    });
  }

}
