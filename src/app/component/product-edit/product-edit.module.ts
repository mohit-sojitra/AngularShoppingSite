import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/core/shared.module';
import { ProductEditComponent } from './product-edit.component';

@NgModule({
  declarations: [ProductEditComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ProductEditComponent,
      },
    ]),
    SharedModule,
  ],
})
export class ProductModule {}
