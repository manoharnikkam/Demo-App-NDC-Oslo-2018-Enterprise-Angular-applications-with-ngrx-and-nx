import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as ProductsFeature from './products.reducer';
import * as ProductsActions from './products.actions';
import { ProductsService } from '../services/products/products.service';
import { of } from 'rxjs';
import {
  catchError,
  exhaustMap,
  filter,
  map,
  mergeMap,
  switchMap,
} from 'rxjs/operators';
import { RouterNavigatedAction, ROUTER_NAVIGATION } from '@ngrx/router-store';

@Injectable()
export class ProductsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return ProductsActions.loadProductsSuccess({ products: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return ProductsActions.loadProductsFailure({ error });
        },
      })
    )
  );

  products$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsActions.loadProducts),
      mergeMap(() =>
        this.productsService.getProducts().pipe(
          map((data) =>
            ProductsActions.loadProductsSuccess({ products: data })
          ),
          catchError((error) =>
            of(ProductsActions.loadProductsFailure({ error }))
          )
        )
      )
    );
  });

  loadFilteredProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigatedAction) =>
        r.payload.routerState.url.startsWith('/products')
      ),
      map(
        (r: RouterNavigatedAction) =>
          r.payload.routerState.root.queryParams['category']
      ),
      switchMap((category: string) =>
        this.productsService.getProducts(category).pipe(
          map((data) =>
            ProductsActions.loadProductsSuccess({ products: data })
          ),
          catchError((error) =>
            of(ProductsActions.loadProductsFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}
