import {Component, OnInit} from '@angular/core';
import {User} from "../models/userModel";
import {LogService} from "./log-user.service";


@Component({
  selector: 'log-user-comp',
  templateUrl: './log-users.component.html'
})
export class LogUserComponent {
  responseToken: string;
  user: User = new User ('', '');

  constructor(private logService: LogService) {
  }


  logUserFun(value: any) {
    this.logService.logUserFun(this.user).subscribe(
      data => this.responseToken = data
    );
  }
}
