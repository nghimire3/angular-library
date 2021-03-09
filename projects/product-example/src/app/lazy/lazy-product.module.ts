import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent, ProductDetailsComponent} from 'product';

const routes: Routes = [
  {path: '', component: ProductComponent},
  {path: 'details', component: ProductDetailsComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyProductModule { }
