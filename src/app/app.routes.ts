import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: '/home-page',
    pathMatch: 'full',
  },

  {
    path: 'home-page',
    loadComponent: () => import("./home-page/home-page.component").then(c => c.HomePageComponent)
  },

  {
    path: 'login-page',
    loadComponent: () => import("./login-page/login-page.component").then(c => c.LoginPageComponent)
  }

];
