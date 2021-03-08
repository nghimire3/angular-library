import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'products',
    loadChildren: () => import('../../../product/src/lib/product-routing.module').then(m => m.ProductRoutingModule)
  },
  {
    path: 'members',
    loadChildren: () => import('../../../members/src/lib/members.module').then(m => m.MembersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
