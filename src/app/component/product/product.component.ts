import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/interfaces/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  isLoading = false;
  Products: ProductModel[];
  constructor(private ProductService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.ProductService.FetchProduct().subscribe((data: ProductModel[]) => {
      this.isLoading = false;
      // console.log(data);
      this.Products = data;
    });
  }

  OnEdit() {
    this.router.navigate(['/product/edit']);
  }

  OnDelete(i) {
    console.log(i);
    this.Products.splice(i,1);
    console.log(this.Products);
  }
}
