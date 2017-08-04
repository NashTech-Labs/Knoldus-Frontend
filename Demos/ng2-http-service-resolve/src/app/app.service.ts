import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {User}  from './shared/models/user';
import 'rxjs/add/operator/toPromise';


@Injectable()

export class AppService {

  listUsersApiUrl = 'https://reqres.in/api/users?page=2';

  constructor(private http: Http) {
  }

  /**
   * Service method to fetch the list of users
   */
  fetchUserList() {
   return this.http.get(this.listUsersApiUrl).
    toPromise();
  }
}
