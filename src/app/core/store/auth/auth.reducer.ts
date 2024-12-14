import { createReducer, on } from '@ngrx/store';

import { AuthStateProps } from './auth.types';
import { initialAuthState } from './auth.variables';
import { authActions } from './auth.actions';

export const authReducer = createReducer(
  initialAuthState,
  on(authActions.login, (state): AuthStateProps => ({ ...state, loading: true })),
  on(authActions.loginSuccess, (state, { user, token }): AuthStateProps => ({ ...state, user, token, loading: false })),
  on(authActions.loginFailure, (state): AuthStateProps => ({ ...state, loading: false })),
  on(authActions.logout, (): AuthStateProps => initialAuthState),
  on(authActions.resetState, (): AuthStateProps => initialAuthState),
);
