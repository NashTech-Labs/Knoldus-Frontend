import {Injectable} from '@angular/core';
import {AppService} from '../app.service';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {User} from '../shared/models/user';


@Injectable()

export class UserResolve implements Resolve<User> {

  constructor(private appService: AppService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.appService.fetchUserList().then((users: any) => users);
  }
}
