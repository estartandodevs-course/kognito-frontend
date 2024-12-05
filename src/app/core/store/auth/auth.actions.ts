import { createAction, props } from '@ngrx/store';
import { UserProps } from './auth.types';

const login = createAction('[Auth] Login', props<{ email: string; password: string }>());

const loginSuccess = createAction('[Auth] Login Success', props<{ user: UserProps; token: string }>());

const loginFailure = createAction('[Auth] Login Failure');

const logout = createAction('[Auth] Logout');

export const authActions = { login, loginSuccess, loginFailure, logout };
