import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()

export class ListColorService {
  constructor(private http: Http) {
  }

  getColorsList() {
    return this.http.get('../app/data/trainingData.json').map(
      (response) => response.json(),
      (error: any) => console.log('we got error in data service')
    );
  }

}
