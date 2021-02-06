import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./component/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./component/login/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./component/product/product.module').then((m) => m.ProductModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
