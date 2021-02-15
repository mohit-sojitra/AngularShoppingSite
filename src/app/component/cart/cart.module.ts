import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../core/shared.module';
import { CartComponent } from './cart.component';

@NgModule({
  declarations: [CartComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CartComponent,
      },
    ]),
    SharedModule,
    FormsModule
  ],
})
export class CartModule {}
