import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PizzaMenuItemDetailDeliveryComponent } from './pizza-menu-item-detail-delivery/pizza-menu-item-detail-delivery.component';


const ChildRoutes: Routes = [
  {
    path: 'itemDetail',
    component: PizzaMenuItemDetailDeliveryComponent
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
export class PizzaMenuItemDetailRoutingModule { }
