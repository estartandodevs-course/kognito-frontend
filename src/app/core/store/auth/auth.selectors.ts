import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthStateProps } from './auth.types';

const selectAuthState = createFeatureSelector<AuthStateProps>('auth');

const selectUser = createSelector(selectAuthState, (state) => state.user);

const selectLoadingRequest = createSelector(selectAuthState, (state) => state.loading);

export const authSelectors = { selectUser, selectLoadingRequest };
