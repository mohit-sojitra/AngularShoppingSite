import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/interfaces/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  isLoading = false;
  Products: ProductModel[];
  searchText:string;
  constructor(
    private ProductService: ProductService,
    private router: Router,
    private CartService: CartService,
    private ToasterService: ToasterService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.ProductService.FetchProduct().subscribe((data: ProductModel[]) => {
      this.isLoading = false;
      // console.log(data);
      this.Products = data;
      this.ProductService.ProductList = data;
    });
  }

  OnEdit(id: number) {
    this.router.navigate(['/product/edit', id]);
  }

  OnDelete(i) {
    console.log(i);
    this.Products.splice(i, 1);
    console.log(this.Products);
  }

  OnAddtoCart(i) {
    // console.log(this.Products[i].inCart);
    this.CartService.AddToCart(this.Products[i], i).subscribe(data => {
      this.ToasterService.showSuccess(this.Products[i].title,"Added to cart");
    },error => {
      this.ToasterService.showError('Error',error);
    });
  }


}
