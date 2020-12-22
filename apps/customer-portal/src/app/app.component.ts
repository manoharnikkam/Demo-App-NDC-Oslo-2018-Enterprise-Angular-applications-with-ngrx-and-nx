import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routerReducer } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { AuthActions } from '@nx-workspace/auth';
import { User } from '@nx-workspace/data-models';

@Component({
  selector: 'nx-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'customer-portal';

  constructor(private store: Store, private router: Router) {
    const cachedUser = localStorage.getItem('nx-workspace-user');
    if (cachedUser) {
      // this.router.navigate(['/auth/login']);
      const user = JSON.parse(cachedUser!);
      this.store.dispatch(AuthActions.loginSuccess({ user }));
    } else {
      this.router.navigate(['/products']);
    }
  }
}
