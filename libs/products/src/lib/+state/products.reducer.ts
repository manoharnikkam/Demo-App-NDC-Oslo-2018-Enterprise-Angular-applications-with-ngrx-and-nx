import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as ProductsActions from './products.actions';
import { ProductsEntity } from './products.models';
import { Product } from '@nx-workspace/data-models';

export const PRODUCTS_FEATURE_KEY = 'products';

export interface State extends EntityState<Product> {
  selectedId?: string | number; // which Products record has been selected
  loaded: boolean; // has the Products list been loaded
  error?: string | null; // last known error (if any)
}

export interface ProductsPartialState {
  readonly [PRODUCTS_FEATURE_KEY]: State;
}

export const productsAdapter: EntityAdapter<Product> = createEntityAdapter<
  Product
>();

export const initialState: State = productsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  error: '',
  products: [],
});

const productsReducer = createReducer(
  initialState,

  on(ProductsActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
    products: [],
  })),

  on(ProductsActions.loadProductsSuccess, (state, { products }) => {
    return productsAdapter.setAll(products, { ...state, loaded: true });
  }),

  on(ProductsActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    products: [],
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return productsReducer(state, action);
}