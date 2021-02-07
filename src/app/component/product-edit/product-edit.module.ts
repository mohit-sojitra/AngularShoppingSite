import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/core/shared.module';
import { ProductEditComponent } from './product-edit.component';

@NgModule({
  declarations: [ProductEditComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductEditComponent,
      },
    ]),
    SharedModule,
  ],
})
export class ProductEditModule {}
