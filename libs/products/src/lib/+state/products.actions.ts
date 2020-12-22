import { createAction, props } from '@ngrx/store';
import { Product } from '@nx-workspace/data-models';
import { ProductsEntity } from './products.models';

export const init = createAction('[Products Page] Init');

export const loadProducts = createAction('[Products/Page] Load Products');

export const loadProductsSuccess = createAction(
  '[Products/API] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Products/API] Load Products Failure',
  props<{ error: any }>()
);
