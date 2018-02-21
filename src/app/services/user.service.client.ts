import { User } from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
// import "rxjs/Rx";
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()

export class UserService {

  users: User[] = [
    new User('123', 'alice', '123', 'Alice', 'Wonder' ),
    new User('234', 'bob', 'bob', 'bob', 'Marley'),
    new User('345', 'charlie', 'charlie', 'charlie', 'Garcie'),
    new User('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi')
  ];

  api = {
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUsername,
    'findUserByCredentials' : this.findUserByCredentials,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser
  };

  constructor() { }

  createUser(user: User) {
    this.users.push(new User(user._id, user.username, user.password, user.firstName, user.lastName));
  }

  findUserById(userId: String) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {  return this.users[x]; }
    }
  }

  findUserByUsername(username: String) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username) { return this.users[x]; }
    }
  }

  findUserByCredentials(username, password) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username && this.users[x].password === password) {
          return this.users[x];
      }
    }
  }

  updateUser(userId, user) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
          this.users[x].firstName = user.firstName;
          this.users[x].lastName = user.lastName;
          this.users[x].username = user.username;
          return this.users[x];
      }
    }
  }
  deleteUser(userId) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        this.users.splice(x, 1);
      }
    }
  }

}
