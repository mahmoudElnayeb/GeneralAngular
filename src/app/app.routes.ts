import { Routes } from '@angular/router';
import { InnerViewComponent } from './pages/inner-view/inner-view.component';
import { LoginComponent } from './modules/authenticate/login/login.component';
import { RegisterComponent } from './modules/authenticate/register/register.component';

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
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];
