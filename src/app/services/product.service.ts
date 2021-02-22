import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../interfaces/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public ProductList: ProductModel[];
  constructor(private http: HttpClient) {}

  public FetchProduct() {
    return this.http.get<ProductModel[]>('https://fakestoreapi.com/products');
  }

  public AddProduct(newProduct: ProductModel) {
    return this.http.post('https://fakestoreapi.com/products', {
      title: newProduct.title,
      price: newProduct.price,
      description: newProduct.description,
      image: 'https://i.pravatar.cc',
      category: newProduct.category,
    });
  }

  public UpdateProduct(updatedProduct: ProductModel, id: number) {
    return this.http.put('https://fakestoreapi.com/products/' + id, {
      title: updatedProduct.title,
      price: updatedProduct.price,
      description: updatedProduct.description,
      image: 'https://i.pravatar.cc',
      category: updatedProduct.category,
    });
  }

  public DeleteProduct(id:number) {
    return this.http.delete('https://fakestoreapi.com/products/'+id);
  }
}
