import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {SharedService} from '../shared.service';

@Injectable()
export class ProjUserService {

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

    return this.http.post(this.baseUrl + '/api/project/login', body, this.options)
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
    return this.http.post(this.baseUrl + '/api/project/logout', '', this.options)
      .map(
        (res: Response) => {
          const data = res;
        }
      );
  }

  loggedIn() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/project/loggedIn', '', this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          if (user !== '0') {
            this.sharedService.user = user; // setting user as global variable using shared service
            return true;
          } else {
            this.router.navigate(['/project']);
            return false;
          }
        }
      );
  }

  register(user) {
    this.options.withCredentials = true;
    console.log('registering user');

    return this.http.post(this.baseUrl + '/api/project/register', user, this.options)
      .map(
        (res: Response) => {
          console.log('user service client.ts after response');
          console.log(res);
          return res.json();
        }
      ) ;
  }


  createUser(user) {
    return this.http.post(this.baseUrl + '/api/project/user', user).map((response: Response) => {
      return response.json();
    });
  }

  findUserByUsertype(userType) {
    console.log('client side usertype');
    return this.http.get(this.baseUrl + '/api/project/user?usertype=' + userType).map((response: Response) => {
      console.log('in project user client side');
      console.log(response);
      return response.json();
    });
  }

  findUserById(userId) {
    return this.http.get(this.baseUrl + '/api/project/user/' + userId).map((response: Response) => {
      console.log('in project user client side');
      console.log(response);
      return response.json();
    });
  }

  findUserByUsername(username) {
    return this.http.get(this.baseUrl + '/api/project/user?username=' + username).map((response: Response) => {
      return response.json();
    });
  }

  findUserByCredentials(username, password) {
    console.log('client side project user' + username + ' password ' + password);
    return this.http.get(this.baseUrl + '/api/project/user?username=' + username + '&password=' + password).map((response: Response) => {
      console.log('after response');
      console.log(response);
      return response.json();
    });
  }

  updateUser(userId, user) {
    return this.http.put(this.baseUrl + '/api/project/user/' + userId, user).map((response: Response) => {
      return response.json();
    });
  }

  deleteUser(userId) {
    return this.http.delete(this.baseUrl + '/api/project/user/' + userId).map((response: Response) => {
      return response.json();
    });
  }


}
