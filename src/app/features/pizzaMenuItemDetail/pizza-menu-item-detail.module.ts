import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PizzaMenuItemDetailDeliveryComponent } from './pizza-menu-item-detail-delivery/pizza-menu-item-detail-delivery.component';
import { PizzaMenuItemDetailRoutingModule } from './pizza-menu-item-detail-routing.module';

@NgModule({
  imports: [
    PizzaMenuItemDetailRoutingModule,
    CommonModule
  ],
  declarations: [PizzaMenuItemDetailDeliveryComponent]
})
export class PizzaMenuItemDetailModule { }