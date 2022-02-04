import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { ProductsComponent } from '../products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@NgModule({
  declarations: [
    RemoteEntryComponent,
    ProductsComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductsComponent,
      },
      {
        path: 'detail/:id',
        component: ProductDetailComponent,
      },
      {
        path: 'test',
        loadChildren: () =>
          import('test/Module').then((m) => m.RemoteEntryModule),
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
