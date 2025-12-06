import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { User } from '../../models/user.model';

export interface AuthState {
  user: User | null;
  loading: boolean;
}

export const initialState: AuthState = {
  user: null,
  loading: false
};

export const authReducer = createReducer(
  initialState,

  on(AuthActions.login, state => ({
    ...state,
    loading: true
  })),

  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false
  })),

  on(AuthActions.loginFailure, state => ({
    ...state,
    user: null,
    loading: false
  })),

  on(AuthActions.logout, () => initialState)
);
