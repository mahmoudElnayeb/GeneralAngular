import { Routes } from '@angular/router';
import { InnerViewComponent } from './pages/inner-view/inner-view.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: InnerViewComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];
