import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { Login } from './auth/login/login';
import { AppShell } from './layout/app-shell/app-shell';

export const routes: Routes = [
  // Public routes
  { path: 'login', component: Login },

  // Protected app shell (wraps all authenticated content)
  {
    path: '',
    component: AppShell,
    canActivate: [authGuard],
    children: [
      {
        path: 'todos',
        loadChildren: () =>
          import('./todos/todos.routes').then((m) => m.TODOS_ROUTES),
      },
      { path: '', redirectTo: 'todos', pathMatch: 'full' },
    ],
  },

  // Wildcard for unknown routes
  { path: '**', redirectTo: 'todos' },
];
