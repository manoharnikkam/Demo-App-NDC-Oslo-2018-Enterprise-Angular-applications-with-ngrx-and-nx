import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './containers/products/products.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '@nx-workspace/material';

import * as fromProducts from './+state/products.reducer';
import { ProductsEffects } from './+state/products.effects';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ProductsComponent },
    ]),

    StoreModule.forFeature(
      fromProducts.PRODUCTS_FEATURE_KEY,
      fromProducts.reducer
    ),

    EffectsModule.forFeature([ProductsEffects]),
  ],
  declarations: [ProductsComponent, ProductListComponent],
  exports: [ProductsComponent],
})
export class ProductsModule {}
