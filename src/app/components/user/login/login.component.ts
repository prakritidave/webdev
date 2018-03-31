import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../models/user.model.client';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: String;
  password: String;
  currUser: User;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private userService: UserService, private router: Router) { }

login(username: String, password: String) {
    this.userService.findUserByCredentials(username, password).subscribe((user: User) => {
      if (user) {
        console.log(user);
        // console.log(' ');
         console.log(user._id);
        this.router.navigate(['/profile', user._id]);
      }
    });
  }

  ngOnInit() {
  }

}


