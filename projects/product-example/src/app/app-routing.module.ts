import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'products',
    loadChildren: () => import('./lazy/lazy-product.module').then(m => m.LazyProductModule)
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
