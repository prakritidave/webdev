import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjUserService} from '../../../services/project/projuser.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-profile-proj-user',
  templateUrl: './profile-proj-user.component.html',
  styleUrls: ['./profile-proj-user.component.css']
})
export class ProfileProjUserComponent implements OnInit {

  userChef: boolean;
  userId: any;
  user: any;
  updatedUser: any;
  typeofuser: any;
  username: any;
  firstName: any;
  lastName: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private projUserService: ProjUserService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.userId = param['userId'];
      this.projUserService.findUserById(this.userId)
        .subscribe((res: any) => {
          console.log(res);
          this.user = res;
          console.log(this.user);
        });
    });
  }

  updateUser() {
    this.updatedUser = {
      _id : this.user._id,
      username: this.user.username,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      usertype: this.user.usertype,
      password: this.user.password
    };
    this.projUserService.updateUser(this.user._id, this.updatedUser)
      .subscribe((res: any) => {
        console.log(res);
        this.user = res;
        this.ngOnInit();
      });
  }

  deleteUser() {
    this.projUserService.deleteUser(this.user._id)
      .subscribe((res: any) => {
        console.log(res);
      });
    this.router.navigate(['project']);
  }

  logoutUser() {
    this.projUserService.logout()
      .subscribe((res: any) => {
        console.log(res);
      });
    this.router.navigate(['project']);
  }

}
