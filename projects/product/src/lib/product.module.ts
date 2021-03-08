import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {ProductRoutingModule} from './product-routing.module';



@NgModule({
  declarations: [ProductComponent, ProductDetailsComponent],
  imports: [
    ProductRoutingModule
  ],
  exports: [ProductComponent, ProductDetailsComponent]
})
export class ProductModule { }
