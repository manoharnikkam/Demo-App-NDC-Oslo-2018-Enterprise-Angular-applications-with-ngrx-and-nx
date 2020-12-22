import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard, authRoutes } from '@nx-workspace/auth';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  {
    path: 'auth',
    children: authRoutes,
  },
  {
    path: 'products',
    loadChildren: () =>
      import('@nx-workspace/products').then((m) => m.ProductsModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
