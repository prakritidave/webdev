import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormControl, FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';
import {ProjUserService} from '../../../services/project/projuser.service.client';


@Component({
  selector: 'app-chef-list',
  templateUrl: './chef-list.component.html',
  styleUrls: ['./chef-list.component.css']
})
export class ChefListComponent implements OnInit {
  chefs = [];
  usertype: any;
  userId: any;

  constructor(private projUserService: ProjUserService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.usertype = 'chef';
    this.activatedRoute.params.subscribe((params) => {
      this.userId = params['userId'];
    });
    this.projUserService.findUserByUsertype(this.usertype)
      .subscribe((res: any) => {
        this.chefs = res;
        console.log(this.chefs);
      });
  }

}
