import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webdev-menu',
  templateUrl: './webdev-menu.component.html',
  styleUrls: ['./webdev-menu.component.css']
})
export class WebdevMenuComponent implements OnInit {
  showAssginmentLogin: boolean;
  showProjectLogin: boolean;

  constructor() { }

  ngOnInit() {
    this.showAssginmentLogin = false;
    this.showProjectLogin = false;
  }

  toggleAssignmentLogin() {
    this.showAssginmentLogin = !this.showAssginmentLogin;
  }

  toggleProjectLogin() {
    this.showProjectLogin = !this.showProjectLogin;
  }

}
