import { inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { map, switchMap, catchError, of } from 'rxjs';

export const authEffects = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService)
  ) => {
    return actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ username, password }) =>
        authService.login(username, password).pipe(
          map(user => AuthActions.loginSuccess({ user })),
          catchError(() => of(AuthActions.loginFailure()))
        )
      )
    );
  },
  { functional: true }
);
