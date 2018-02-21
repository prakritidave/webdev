import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../models/user.model.client';
import {Router} from '@angular/router';
import { FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(private userService: UserService, private router: Router) { }

login(username: String, password: String) {
    const user: User = this.userService.findUserByCredentials(this.username, this.password);
    if (user) {
      this.router.navigate(['/profile', user._id]);
    }
  }

  ngOnInit() {
  }

}


