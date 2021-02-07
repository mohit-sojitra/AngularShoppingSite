import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/core/shared.module';
import { AuthGuard } from 'src/app/guards/auth.guard';

import { ProductComponent } from './product.component';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ProductComponent,
      },
      {
        path: 'edit/:id',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../product-edit/product-edit.module').then(
            (m) => m.ProductEditModule
          ),
      },
    ]),
    SharedModule,
  ],
})
export class ProductModule {}
