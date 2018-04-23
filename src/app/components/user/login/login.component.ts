import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../models/user.model.client';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';
import {environment} from '../../../../environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: String;
  password: String;
  currUser: any;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';
  baseUrl: any;

  constructor(private userService: UserService, private sharedService: SharedService, private router: Router) { }

loginUser() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.userService.login(this.username, this.password).subscribe((user: any) => {
      console.log('login component');
      if (user) {
        console.log(user);
        // console.log(' ');
         console.log(user._id);
         this.sharedService.user = user;
         this.errorFlag = false;
         this.currUser = user;
        this.router.navigate(['/profile', this.currUser._id]);
      }
    },
      (error: any) => {
      this.errorFlag = true;
      } );
  }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
  }

}


