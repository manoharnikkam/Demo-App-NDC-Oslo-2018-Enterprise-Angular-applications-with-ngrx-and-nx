import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as AuthFeature from './auth.reducer';
import * as AuthActions from './auth.actions';
import { AuthService } from '../services/auth/auth.service';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap((action) =>
        this.authService.login(action.authenticate).pipe(
          map((data) => AuthActions.loginSuccess({ user: data })),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private authService: AuthService) {}
}
