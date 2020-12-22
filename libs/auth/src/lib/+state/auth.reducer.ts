import { createReducer, on, Action, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as AuthActions from './auth.actions';
import { AuthEntity } from './auth.models';
import { Authenticate, User } from '@nx-workspace/data-models';

export const AUTH_FEATURE_KEY = 'auth';

export interface State {
  user?: User | any; // which Auth record has been selected
  loaded: boolean; // has the Auth list been loaded
  error?: string | null; // last known error (if any)
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: State;
}

const initialState: State = {
  // set initial required properties
  loaded: false,
  user: null,
};

const authReducer = createReducer(
  initialState,

  on(AuthActions.loginSuccess, (state, { user }) => {
    return {
      ...state,
      user,
      loaded: true,
    };
  }),

  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    user: null,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}

// selectors
// export const selectUserState = (state: State) => state;
// export const selectUser = (state: State) => state.user;
// export const selectError = (state: State) => state.error;

// export const selectAuthUser = createSelector(selectUserState, selectUser);
// export const selectAuthError = createSelector(selectUserState, selectError);
