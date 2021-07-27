import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PizzaMenuDeliveryComponent } from './pizza-menu-delivery/pizza-menu-delivery.component';


const ChildRoutes: Routes = [
  {
    path: 'menu',
    component: PizzaMenuDeliveryComponent
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
export class PizzaMenuDeliveryRoutingModule { }
