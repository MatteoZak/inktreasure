import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.page').then( m => m.DashboardPage)
      },
    ]
  },
  
  {
    path: '',
    redirectTo: 'home/dashboard',
    pathMatch: 'full',
  },
];
