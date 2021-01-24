import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsListComponent } from './product-listings/product-listings.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: 'products', component: ProductComponent,
    children: [
      { path: '', component: ProductsListComponent },
      { path: ':productId', component: ProductDetailComponent }
    ]
  }
];


@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductsListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class productModule { }
