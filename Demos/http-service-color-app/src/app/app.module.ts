import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {ListColorsComponent} from "./listColors/list-colors.component";
import {LogUserComponent} from "./logUser/log-users.component";
import {ListColorService} from "./listColors/list-color.service";
import {HttpModule} from "@angular/http";
import {routing} from "./app.routing";
import {FormsModule} from "@angular/forms";
import {LogService} from "./logUser/log-user.service";

@NgModule({
  imports: [BrowserModule, HttpModule, routing, FormsModule],
  declarations: [AppComponent, ListColorsComponent, LogUserComponent],
  bootstrap: [AppComponent],
  providers: [ListColorService, LogService]
})
export class AppModule {
}
