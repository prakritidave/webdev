import { User } from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import {Router} from '@angular/router';
import {SharedService} from './shared.service';


@Injectable()

export class UserService {

  constructor(private http: Http, private router: Router, private sharedService: SharedService) { }
  baseUrl = environment.baseUrl;
  options = new RequestOptions();

  login(username, password) {
    this.options.withCredentials = true;
    console.log('user service client login');

    const body = {
      username : username,
      password: password
    };

    return this.http.post(this.baseUrl + '/api/login', body, this.options)
      .map(
        (res: Response) => {
          console.log('got response');
          console.log(res);
          return res.json();
        }
      );
  }

  logout() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/logout', '', this.options)
      .map(
        (res: Response) => {
          const data = res;
        }
      );
  }

  loggedIn() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          if (user !== '0') {
            this.sharedService.user = user; // setting user as global variable using shared service
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      );
  }


  register(username, password) {
    this.options.withCredentials = true;
    const user = {
      username: username,
      password: password
    };
    console.log('registering user');

    return this.http.post(this.baseUrl + '/api/register', user, this.options)
      .map(
        (res: Response) => {
          console.log('user service client.ts after response');
          console.log(res);
          return res.json();
        }
      ) ;
  }

  createUser(user) {
    return this.http.post(this.baseUrl + '/api/user', user).map((response: Response) => {
      return response.json();
    });
  }

  findUserById(userId: String) {
    return this.http.get(this.baseUrl + '/api/user/' + userId).map((response: Response) => {
      return response.json();
    });
  }

  findUserByUsername(username: String) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username).map((response: Response) => {
      return response.json();
    });
  }

  findUserByCredentials(username, password) {
    console.log('client side user service' + username + ' password ' + password);
    return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password).map((response: Response) => {
      return response.json();
    });
  }

  updateUser(userId, user) {
    return this.http.put(this.baseUrl + '/api/user/' + userId, user).map((response: Response) => {
      return response.json();
    });
  }

  deleteUser(userId) {
    return this.http.delete(this.baseUrl + '/api/user/' + userId).map((response: Response) => {
      return response.json();
    });
  }

}
