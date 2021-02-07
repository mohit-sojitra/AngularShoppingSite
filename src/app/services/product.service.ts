import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../interfaces/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  ProductList: ProductModel[];
  constructor(private http: HttpClient) {}

  FetchProduct() {
    return this.http.get<ProductModel[]>('https://fakestoreapi.com/products');
  }
}
