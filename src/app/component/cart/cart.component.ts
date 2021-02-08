import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { cartModel } from 'src/app/interfaces/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  totalPrice: number = 0;
  cartProducts: cartModel[];
  constructor(private CartService: CartService) {}

  ngOnInit(): void {
    this.cartProducts = this.CartService.cartProducts;
    this.totalPrice = this.CartService.totalPrice;
    console.log(this.totalPrice);
    console.log(this.cartProducts);
  }

  onRemoveProduct(i) {
    this.CartService.RemoveProduct(i);
    this.totalPrice = this.CartService.totalPrice;
  }

  onChangeProductQuantity(index, productQuantity: HTMLInputElement) {
    this.CartService.UpdateProductQuantity(index, +productQuantity.value);
    this.totalPrice = this.CartService.totalPrice;
  }
}
