import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PizzaCartDeliveryComponent } from './pizza-cart-delivery/pizza-cart-delivery.component';


const ChildRoutes: Routes = [
  {
    path: 'cart',
    component: PizzaCartDeliveryComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ChildRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class PizzaCartDeliveryRoutingModule { }
