import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FilterPipe } from 'src/app/core/filter.pipe';
import { SharedModule } from 'src/app/core/shared.module';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [ProductComponent,FilterPipe],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ProductComponent,
      },
      {
        path: 'edit/:id',
        loadChildren: () =>
          import('../product-edit/product-edit.module').then(
            (m) => m.ProductEditModule
          ),
      },
    ]),
    SharedModule,
    FormsModule,
  ],
})
export class ProductModule {}
