import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '@nx-workspace/data-models';
// import { ProductsActions, ProductsSelectors } from '@nx-workspace/products';
import { Observable } from 'rxjs';
import { State } from '../../+state/products.reducer';
import { getAllProducts } from '../../+state/products.selectors';
import * as ProductsActions from '../../+state/products.actions';
import * as ProductsFeature from '../../+state/products.reducer';
import * as ProductsSelectors from '../../+state/products.selectors';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'nx-workspace-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private store: Store<State>, private router: Router) {
    this.products$ = this.store.select(getAllProducts);
  }

  ngOnInit(): void {
    this.store.dispatch(ProductsActions.loadProducts());
  }

  updateUrlFilter(category: string) {
    const navigationExtras: NavigationExtras = {
      replaceUrl: true,
      queryParams: { category },
    };

    this.router.navigate(['/products'], navigationExtras);
  }
}
