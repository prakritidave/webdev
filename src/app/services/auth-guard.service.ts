import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from './user.service.client';
import {ProjUserService} from './project/projuser.service.client';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private userService: UserService,
              private router: Router,
              private projUserService: ProjUserService) {}

  canActivate() {
    return this.userService.loggedIn();
  }

}
