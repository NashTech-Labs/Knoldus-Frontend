import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserComponent} from './users/user.component';
import {RouterModule, Routes} from '@angular/router';
import {UserResolve} from './users/user-resolve.service';


const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data : {
          message: 'We are in the dashboard route, default data'
        }
      },
      {
        path: 'users',
        component: UserComponent,
        resolve: {
          users: UserResolve
        }
      }
    ]
  }
]

export const routing = RouterModule.forRoot(appRoutes);
