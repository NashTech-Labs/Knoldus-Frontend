import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'dashboard-comp',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  usersData: any = [];

  constructor(private  activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.forEach(data => {
      this.usersData = data;
    });
  }

}
