import {Component, OnInit, ViewChild} from '@angular/core';
import {ProjUserService} from '../../../services/project/projuser.service.client';
import { Router} from '@angular/router';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-register-proj-user',
  templateUrl: './register-proj-user.component.html',
  styleUrls: ['./register-proj-user.component.css']
})
export class RegisterProjUserComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;

  username: string;
  password: string;
  vpassword: string;
  firstName: any;
  lastName: any;
  usertype: any;
  user: any;
  newuser: any;
  error: any;

  constructor(private projUserService: ProjUserService, private router: Router) { }

  ngOnInit() {
    this.usertype = 'chef';
  }

  getRadioButtonValue(event: any) {
    this.usertype = event.target.value;
    console.log(this.usertype);
  }

  registerUser() {

    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.usertype);

    if (this.password === this.vpassword) {
      this.newuser = {
        username: this.username,
        usertype: this.usertype,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName
      };

      this.projUserService.register(this.newuser)
        .subscribe((res) => {
          console.log(res);
          this.user = res;
          this.router.navigate(['/project', 'profile', this.user._id]);
        });
      }  else {
      this.error = 'passwords don\'t match!!';
    }

    //   this.projUserService.createUser(this.newuser)
    //     .subscribe((res: any) => {
    //       console.log(res);
    //       this.user = res;
    //       this.router.navigate(['/project', 'profile', this.user._id]);
    //     });
    // } else {
    //   this.error = 'passwords don\'t match!!';
    // }
  }

}
