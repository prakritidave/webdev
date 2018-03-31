import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model.client';
import { UserService } from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: String;
  password: String;
  firstname: String;
  lastname: String;
  user: User;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  addRegisteredUser() {
     // this.user = new User((new Date()).getTime() + '',
     // this.username, this.password, this.firstname, this.lastname);
     const newUser = {
       _id: '',
       username: this.username,
       password: this.password,
       firstName: this.firstname,
       lastName: this.lastname
     };
     this.userService.createUser(newUser).subscribe((userFromServer) => {
       console.log(userFromServer);
       this.router.navigate(['/']);
     });
  }

}
