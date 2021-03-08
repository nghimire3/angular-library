import { Injectable } from '@angular/core';

@Injectable({
  // This allows to provide a service without explictly registering it in any NgModule
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
}
