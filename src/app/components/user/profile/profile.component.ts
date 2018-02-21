import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';
import {setViewNext} from '@angular/core/src/render3/node_manipulation';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: String;
  user: User;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['userId'];
      this.user = this.userService.findUserById(this.userId);
    });
  }

  updateUser(user) {
    console.log(user);
    this.user = this.userService.updateUser(this.userId, user);
    this.router.navigate(['/login']);
  }

}
