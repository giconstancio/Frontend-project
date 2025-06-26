import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

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
    loadComponent: () => import("./auth/login-page/login-page.component").then(c => c.LoginPageComponent)
  },

  {
    path: 'filmes',
    canActivate: [AuthGuard],
    loadComponent: () => import("./filmes/filmes.component").then(c => c.FilmesComponent)
  },

  {
    path: 'filmes/:id',
    loadComponent: () => import('./filme-detalhes/filme-detalhes.component').then(c => c.FilmeDetalhesComponent)
  },

  {
    path: 'logout-page',
    loadComponent: () => import("./auth/logout-page/logout-page.component").then(c => c.LogoutPageComponent)
  },
];
