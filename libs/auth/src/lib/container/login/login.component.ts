import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Authenticate } from '@nx-workspace/data-models';
import { AuthService } from '../../services/auth/auth.service';

import { Store } from '@ngrx/store';
import { State } from '../../+state/auth.reducer';
import * as AuthActions from '../../+state/auth.actions';

@Component({
  selector: 'nx-workspace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private store: Store) {}

  ngOnInit(): void {}

  login(authenticate: Authenticate) {
    console.log(authenticate);
    //this.authService.login(authenticate).subscribe();
    this.store.dispatch(AuthActions.login({ authenticate }));
  }
}
