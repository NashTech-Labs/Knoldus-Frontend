import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {User} from "../models/userModel";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Observable';


@Injectable()

export class LogService {
  constructor(private http: Http) {
  }


  logUserFun(user: User) {

    let jsonHeader = new Headers({
      'Content-Type': 'application/json'
    });
    let Obj = {
      email: user.email,
      password: user.password
    }

    return this.http.post('https://reqres.in/api/register', Obj, {headers: jsonHeader}).map(
      data => data.json(),
      (error:any) => console.log('error')
    );
  }

}
