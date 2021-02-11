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

  AddProduct(newProduct: ProductModel) {
    return this.http.post('https://fakestoreapi.com/products', {
      title: newProduct.title,
      price: newProduct.price,
      description: newProduct.description,
      image: 'https://i.pravatar.cc',
      category: newProduct.category,
    });
  }

  UpdateProduct(updatedProduct: ProductModel,id:number) {
    return this.http.put('https://fakestoreapi.com/products/'+id, {
      title: updatedProduct.title,
      price: updatedProduct.price,
      description: updatedProduct.description,
      image: 'https://i.pravatar.cc',
      category: updatedProduct.category,
    });
  }
}
