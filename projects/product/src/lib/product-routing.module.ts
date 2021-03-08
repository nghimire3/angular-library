import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './product.component';
import {ProductDetailsComponent} from './product-details/product-details.component';

const routes: Routes = [
  {path: '', component: ProductComponent},
  // {path: ':id', component: ProductDetailsComponent},
  {path: 'details', component: ProductDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
