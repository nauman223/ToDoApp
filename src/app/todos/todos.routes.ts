import { Routes } from '@angular/router';

export const TODOS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/todo-list/todo-list')
        .then((m) => m.TodoList)
        .catch(() =>
          import('../shared/components/not-found/not-found').then(
            (m) => m.NotFound
          )
        ),
    data: { preload: true },
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./pages/todo-create/todo-create')
        .then((m) => m.TodoCreate)
        .catch(() =>
          import('../shared/components/not-found/not-found').then(
            (m) => m.NotFound
          )
        ),
    data: { preload: false },
  },
  {
    path: ':id/edit',
    loadComponent: () =>
      import('./pages/todo-edit/todo-edit')
        .then((m) => m.TodoEdit)
        .catch(() =>
          import('../shared/components/not-found/not-found').then(
            (m) => m.NotFound
          )
        ),
    data: { preload: false },
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./pages/todo-details/todo-details')
        .then((m) => m.TodoDetails)
        .catch(() =>
          import('../shared/components/not-found/not-found').then(
            (m) => m.NotFound
          )
        ),
    data: { preload: true }, // details likely visited often
  },
  {
    path: '**',
    loadComponent: () =>
      import('../shared/components/not-found/not-found').then(
        (m) => m.NotFound
      ),
  },
];
