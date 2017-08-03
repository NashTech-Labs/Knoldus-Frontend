import {Http} from '@angular/http';
import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {ActivatedRoute} from "@angular/router";
import {User} from "../shared/models/user";

@Component({
  selector: 'user-comp',
  templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {
  users:any = [];
  constructor(private http: Http, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  this.activatedRoute.data.forEach(data => {
    this.users = data;
  });
  }
}
