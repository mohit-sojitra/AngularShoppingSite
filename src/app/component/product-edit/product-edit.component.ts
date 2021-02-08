import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductModel } from 'src/app/interfaces/product.model';
import { ProductService } from 'src/app/services/product.service';

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

  constructor(
    private ProductService: ProductService,
    private router: Router,
    private route: ActivatedRoute
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
    this.router.navigate(['/product']);
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
