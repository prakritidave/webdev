import {Component, OnInit, ViewChild} from '@angular/core';
import { UserService } from '../../../services/user.service.client';
import { Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 @ViewChild('f') registerForm: NgForm;

  username: string;
  password: string;
  vpassword: string;
  firstname: string;
  lastname: string;
  user: any;
  error: any;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() { }

  addRegisteredUser() {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.vpassword = this.registerForm.value.vpassword;

    if (this.password === this.vpassword) {
      this.userService.register(this.username, this.password)
        .subscribe(
          (data: any) => {
            console.log(data);
            this.user = data;
            this.router.navigate(['/profile', this.user._id]);
          },
          (error: any) => {
            console.log(error);
            this.error = error._body;
          }
        );
    } else {
      this.error = 'passwords do not match!';
    }
  }

}
