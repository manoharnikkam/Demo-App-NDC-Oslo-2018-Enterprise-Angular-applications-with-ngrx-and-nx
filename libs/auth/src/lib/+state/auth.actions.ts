import { createAction, props } from '@ngrx/store';
import { AuthEntity } from './auth.models';

import { Authenticate, User } from '@nx-workspace/data-models';

export const init = createAction('[Auth Page] Init');

export const login = createAction(
  '[Auth/API] Login User',
  props<{ authenticate: Authenticate }>()
);

export const loginSuccess = createAction(
  '[Auth/API] Load Auth Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Auth/API] Load Auth Failure',
  props<{ error: any }>()
);
