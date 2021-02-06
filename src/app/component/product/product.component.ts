import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/interfaces/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  Products: ProductModel[];
  constructor(private ProductService: ProductService) {}

  ngOnInit(): void {
    this.ProductService.FetchProduct().subscribe((data: ProductModel[]) => {
      console.log(data);
      this.Products = data;
    });
  }
}
