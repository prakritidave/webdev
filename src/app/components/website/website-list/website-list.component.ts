import { Component, OnInit } from '@angular/core';
import { Website } from '../../../models/website.model.client';
import { WebsiteService } from '../../../services/website.service.client';
import { User } from '../../../models/user.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {nextTick} from 'q';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  userId: any;
  user: any;
  websites: any;

  constructor( private userService: UserService, private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
       (params: any) => {
        this.userId = params['userId'];
         this.websiteService.findWebsitesByUser(this.userId).subscribe((websitelist) => {
           console.log(websitelist);
             this.websites = websitelist;
         });
         this.userService.findUserById(this.userId).subscribe((curruser) => {
           this.user = curruser;
           console.log(this.user);
         });
    }
    );
  }

}
