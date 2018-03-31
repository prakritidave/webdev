import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: any;
  user: any;
  username: String;
  firstname: String;
  lastname: String;
  password: String;
  updatedUser: User;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['userId'];
      console.log(this.userId);
       this.userService.findUserById(this.userId).subscribe((userFromServer) => {
         this.user = userFromServer;
         console.log(this.user);
         console.log(this.user.username);
         /*this.username = this.user.username;
         console.log(this.user.username);
         this.firstname = this.user.firstName;
         this.lastname = this.user.lastName;
         this.password = this.user.password;*/
      });
    });
  }

  deleteUser() {
    this.userService.deleteUser(this.userId).subscribe((something) => {
      console.log(something);
    });
  }

  updateUser() {
    this.updatedUser = new User(this.userId, this.user.username, this.user.password, this.user.firstName, this.user.lastName);
      return this.userService.updateUser(this.userId, this.updatedUser).subscribe(
        (newuser) => {
          this.user = newuser;
        }
      );
  }

}
