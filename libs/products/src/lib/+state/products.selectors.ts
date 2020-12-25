import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  PRODUCTS_FEATURE_KEY,
  State,
  ProductsPartialState,
  productsAdapter,
} from './products.reducer';

// Lookup the 'Products' feature state managed by NgRx
// export const getProductsState = createFeatureSelector<
//   ProductsPartialState,
//   State
//   >(PRODUCTS_FEATURE_KEY);

// export const getProductsState = (state: State) => state;
export const getProductsState = createFeatureSelector<State>(
  PRODUCTS_FEATURE_KEY
);

const { selectAll, selectEntities } = productsAdapter.getSelectors();
export const getSelectedId = (state: State) => state.selectedId;
export const getProductsError = (state: State) => state.error;
export const getProductsLoaded = (state: State) => state.loaded;

export const getAllProducts = createSelector(
  getProductsState,
  // (state: State) => selectAll(state) /* or the line below to make short hand */
  selectAll
);

export const getProductsEntities = createSelector(
  getProductsState,
  selectEntities // (state: State) => selectEntities(state)
);

export const getSelected = createSelector(
  getProductsEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
