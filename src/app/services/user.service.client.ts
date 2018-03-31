import { User } from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';


@Injectable()

export class UserService {

  constructor(private http: Http) { }
  baseUrl = environment.baseUrl;

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
