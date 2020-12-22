import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthSelectors, AuthService, State } from '@nx-workspace/auth';
import { User } from '@nx-workspace/data-models';
import { Observable } from 'rxjs';

@Component({
  selector: 'nx-workspace-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  user$: Observable<User>;

  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store<State>
  ) {
    this.user$ = this.store.select(AuthSelectors.selectAuthUser);
  }

  ngOnInit(): void {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
