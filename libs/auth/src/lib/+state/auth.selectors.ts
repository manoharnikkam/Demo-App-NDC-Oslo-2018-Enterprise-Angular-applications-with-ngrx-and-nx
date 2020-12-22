import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY, State } from './auth.reducer';

export const selectUserState = (state: State) => state;
// export const selectUserState = createFeatureSelector<State>(AUTH_FEATURE_KEY);

export const selectUser = (state: State) => state.user;
export const selectError = (state: State) => state.error;

export const selectAuthUser = createSelector(selectUserState, selectUser);
export const selectAuthError = createSelector(selectUserState, selectError);
