import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cartModel } from '../interfaces/cart.model';
import { ProductModel } from '../interfaces/product.model';
import { ToasterService } from './toaster.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartProducts: cartModel;
  public totalPrice: number = 0;
  constructor(
    private ToasterService: ToasterService,
    private http: HttpClient
  ) {}

  public AddToCart(newProduct: ProductModel, index: number) {
    return this.http.put('https://fakestoreapi.com/carts/7', {
      userid: 3,
      date: '2019-12-10',
      product: [{ productId: newProduct.id, quantity: 3 }],
    });

  }

  public FetchCartProduct() {
    return this.http.get<cartModel[]>('https://fakestoreapi.com/carts/user/2');
  }

  public RemoveProduct(i: number) {
    return this.http.delete('https://fakestoreapi.com/carts/6');
  }

  public UpdateProductQuantity(index: any, productQuantity: number) {
    return this.http.put('https://fakestoreapi.com/carts/2', {
      userId: 3,
      date: '2019-12-10',
      products: [{ productId: index, quantity: productQuantity }],
    });
  }
}
