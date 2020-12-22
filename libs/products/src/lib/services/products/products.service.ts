import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '@nx-workspace/data-models';

const BASE_URL = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(category?: string): Observable<Product[]> {
    return this.http.get<Product[]>(
      category ? BASE_URL + `?category=${category}` : BASE_URL
    );
  }
}
