import { Injectable } from '@angular/core';
import { cartModel } from '../interfaces/cart.model';
import { ProductModel } from '../interfaces/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts: cartModel[] = [];
  totalPrice: number = 0;
  constructor() {}

  AddToCart(newProduct: ProductModel) {
    const newCartProduct: cartModel = {
      product: newProduct,
      productQuantity: 1,
      totalPrice: newProduct.price * 1,
    };
    let element = this.cartProducts.findIndex((x) => x.product === newProduct);
    if (element === -1) this.cartProducts.push(newCartProduct);
    else console.log('already in cart');
    console.log(this.cartProducts);
    this.totalPrice = 0;
    this.cartProducts.forEach((element) => {
      this.totalPrice = this.totalPrice + element.totalPrice;
    });
  }

  RemoveProduct(i: number) {
    this.cartProducts.splice(i, 1);
    this.totalPrice = 0;
    this.cartProducts.forEach((element) => {
      this.totalPrice = this.totalPrice + element.totalPrice;
    });
  }

  UpdateProductQuantity(index: any, productQuantity: number) {
    this.cartProducts[index].productQuantity = productQuantity;
    this.cartProducts[index].totalPrice =
      this.cartProducts[index].product.price * productQuantity;
    this.totalPrice = 0;
    this.cartProducts.forEach((element) => {
      this.totalPrice = this.totalPrice + element.totalPrice;
    });
  }
}
