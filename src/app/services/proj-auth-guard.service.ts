import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {ProjUserService} from './project/projuser.service.client';

@Injectable()
export class ProjAuthGuardService implements CanActivate {
  constructor(private router: Router,
              private projUserService: ProjUserService) {}

  canActivate() {
    return this.projUserService.loggedIn();
  }

}
