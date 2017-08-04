import { NgModule }      from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserComponent} from './users/user.component';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/Observable';
import {UserResolve} from './users/user-resolve.service';
import {AppService} from './app.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing, HttpModule, CommonModule ],
  declarations: [ AppComponent, DashboardComponent, UserComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UserResolve, AppService]
})
export class AppModule { }
