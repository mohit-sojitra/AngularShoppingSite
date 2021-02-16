import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { cartModel, CartProductModel } from '../../interfaces/cart.model';
import { ProductModel } from '../../interfaces/product.model';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { ToasterService } from '../../services/toaster.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  isLoading = false;
  totalPrice: number = 0;
  cartProducts: CartProductModel[];
  Product: ProductModel[];
  constructor(
    private CartService: CartService,
    private ProductService: ProductService,
    private ToasterService: ToasterService
  ) {}

  ngOnInit(): void {
    this.Product = this.ProductService.ProductList;
    this.totalPrice = this.CartService.totalPrice;
    this.isLoading = true;
    this.CartService.FetchCartProduct().subscribe((data) => {
      this.isLoading = false;
      this.CartService.cartProducts = data;
      this.cartProducts = data.products;
    });
  }

  onRemoveProduct(i) {
    this.CartService.RemoveProduct(i);
    this.totalPrice = this.CartService.totalPrice;
  }

  onChangeProductQuantity(index, productQuantity: HTMLInputElement) {
    this.CartService.UpdateProductQuantity(
      index,
      +productQuantity.value
    ).subscribe(
      (data) => {
        this.ToasterService.showInfo('Product updated', index);
      },
      (error) => {
        this.ToasterService.showError('Error', error);
      }
    );
    // this.totalPrice = this.CartService.totalPrice;
  }
}
