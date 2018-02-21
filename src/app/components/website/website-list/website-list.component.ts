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
  userId: String;
  websiteName: String;
  websiteDescription: String;
  user: User;
  websites: Website[] = [];

  constructor( private userService: UserService, private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
       (params: any) => {
        this.userId = params['userId'];
    }
    );
    this.websites = this.websiteService.findWebsitesByUser(this.userId);
    this.user = this.userService.findUserById(this.userId);
  }

}
