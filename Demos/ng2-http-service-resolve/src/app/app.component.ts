import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <a [routerLink]="['/dashboard']">Dashboard </a> | <a [routerLink]="['/users']"> Users</a> 
    <router-outlet></router-outlet>`,
})
export class AppComponent {


}
