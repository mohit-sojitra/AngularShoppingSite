import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from '../../interfaces/product.model';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { ToasterService } from '../../services/toaster.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public isLoading = false;
  public Products: ProductModel[];
  public numberofpages: number[];
  public searchText: string;
  public page:number = 1;
  constructor(
    private ProductService: ProductService,
    private router: Router,
    private CartService: CartService,
    private ToasterService: ToasterService
  ) {}

  ngOnInit(): void {
    this.numberofpages = Array(4).fill(0).map((x, i) => i + 1);
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

  OnDelete(id) {
    if (confirm('Are you sure to delete?')) {
      this.ProductService.DeleteProduct(id).subscribe(
        (data) => {
          this.ToasterService.showSuccess(
            'Product Delete Successfully',
            this.Products[id].title
          );
          this.Products.splice(id, 1);
        },
        (error) => {
          this.ToasterService.showError('Error', error);
        }
      );
    }
  }

  resetPage(){
    this.page = 1;
  }

  OnAddtoCart(i) {
    // console.log(this.Products[i].inCart);
    this.CartService.AddToCart(this.Products[i], i).subscribe(
      (data) => {
        this.ToasterService.showSuccess(
          this.Products[i].title,
          'Added to cart'
        );
      },
      (error) => {
        this.ToasterService.showError('Error', error);
      }
    );
  }
}
