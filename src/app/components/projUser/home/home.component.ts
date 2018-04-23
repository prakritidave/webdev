import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProjUserService} from '../../../services/project/projuser.service.client';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: any;
  password: any;
  usertype: any;
  userId: any;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';
  baseUrl: any;

  constructor(private projUserService: ProjUserService, private router: Router) { }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.usertype = 'foodie';
  }

  loginUser() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.usertype = this.loginForm.value.usertype;

    this.projUserService.login(this.username, this.password)
      .subscribe((res: any) => {
        console.log(res);
        this.userId = res._id;
        this.router.navigate(['/project', 'profile', this.userId]);
      });

    // this.projUserService.
    // findUserByCredentials(this.username, this.password)
    //   .subscribe((res: any) => {
    //     console.log(res);
    //     this.userId = res._id;
    //     this.router.navigate(['/project', 'profile', this.userId]);
    //   });
  }

}
