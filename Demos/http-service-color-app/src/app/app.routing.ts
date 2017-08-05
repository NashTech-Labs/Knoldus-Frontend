import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {ListColorsComponent} from "./listColors/list-colors.component";
import {LogUserComponent} from "./logUser/log-users.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/listcolors',
    pathMatch: 'full'
  },
  {
    path: 'listcolors',
    component: ListColorsComponent
  },
  {
    path: 'logusers',
    component: LogUserComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
