import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/core/shared.module';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [ProductComponent,ProductEditComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ProductComponent,
      },
      {
        path: 'edit',
        component: ProductEditComponent 
      }
    ]),
    SharedModule,
  ],
})
export class ProductModule {}
