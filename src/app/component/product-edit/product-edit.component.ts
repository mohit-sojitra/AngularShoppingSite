import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductModel } from '../../interfaces/product.model';
import { ProductService } from '../../services/product.service';
import { ToasterService } from '../../services/toaster.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  @ViewChild('editForm', { static: false }) editForm: NgForm;
  isLoading: boolean = false;
  isEditmode: boolean = false;
  updatingProductId: number = undefined;
  routeSub: Subscription;
  updatingProduct: ProductModel = null;
  updatedProduct: ProductModel = null;
  constructor(
    private ProductService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private ToasterService: ToasterService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((routeParams) => {
      if (routeParams.id !== 'new') this.loadUserDetail(routeParams.id);
    });
  }

  loadUserDetail(id: number) {
    this.updatingProductId = id;
    this.isEditmode = true;
    this.updatingProduct = this.ProductService.ProductList[id];
    setTimeout(() => {
      this.editForm.setValue({
        productTitle: this.updatingProduct.title,
        productCategory: this.updatingProduct.category,
        productPrice: this.updatingProduct.price,
        Productdescription: this.updatingProduct.description,
      });
    });
  }
  onSubmit(editForm) {
    this.isLoading = true;
    this.updatedProduct = {
      id: 1,
      title: editForm.value.productTitle,
      category: editForm.value.productCategory,
      price: editForm.value.productPrice,
      description: editForm.value.Productdescription,
      image: 'null',
    };
    if (this.isEditmode) {
      this.ProductService.UpdateProduct(
        this.updatedProduct,
        this.updatingProductId
      ).subscribe(
        (data) => {
          this.router.navigate(['/product']);
          this.ToasterService.showSuccess(
            this.updatedProduct.title,
            'Product Updated'
          );
        },
        (error) => {
          this.ToasterService.showError('Error', error);
        }
      );
    } else {
      this.ProductService.AddProduct(this.updatedProduct).subscribe(
        (data) => {
          this.router.navigate(['/product']);
          this.ToasterService.showSuccess(
            this.updatedProduct.title,
            'New Product added'
          );
        },
        (error) => {
          this.ToasterService.showError('Error', error);
        }
      );
    }
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
