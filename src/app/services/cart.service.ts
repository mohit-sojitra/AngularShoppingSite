import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cartModel } from '../interfaces/cart.model';
import { ProductModel } from '../interfaces/product.model';
import { ProductService } from './product.service';
import { ToasterService } from './toaster.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts: cartModel;
  totalPrice: number = 0;
  constructor(
    private ToasterService: ToasterService,
    private http: HttpClient
  ) {}

  AddToCart(newProduct: ProductModel, index: number) {
    return this.http.put('https://fakestoreapi.com/carts/7', {
      userid: 3,
      date: '2019-12-10',
      product: [{ productId: newProduct.id, quantity: 3 }],
    });

    // const newCartProduct: cartModel = {
    //   product: newProduct,
    //   productQuantity: 1,
    //   totalPrice: newProduct.price * 1,
    // };
    // let element = this.cartProducts.findIndex((x) => x.product === newProduct);
    // if (element === -1) {
    //   this.ToasterService.showSuccess(
    //     newCartProduct.product.title,
    //     'Product is added in cart'
    //   );
    //   this.cartProducts.push(newCartProduct);
    // }
    // else
    //   this.ToasterService.showInfo(
    //     newCartProduct.product.title,
    //     'Product is already in cart'
    //   );
    // this.totalPrice = 0;
    // this.cartProducts.forEach((element) => {
    //   this.totalPrice = this.totalPrice + element.totalPrice;
    // });
  }

  FetchCartProduct() {
    return this.http.get<cartModel>('https://fakestoreapi.com/carts/2');
  }

  RemoveProduct(i: number) {}

  UpdateProductQuantity(index: any, productQuantity: number) {
    return this.http.put('https://fakestoreapi.com/carts/2', {
      userId: 3,
      date: '2019-12-10',
      products: [{ productId: index, quantity: productQuantity }],
    });
  }
}
