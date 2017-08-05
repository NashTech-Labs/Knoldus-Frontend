import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{name}}</h1>
  <a routerLink='/listcolors'>List of color</a> |  <a routerLink='/logusers'>Log User</a>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  { name = 'Angular 2 Http Services'; }
