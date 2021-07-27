import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PizzaMenuDeliveryComponent } from './pizza-menu-delivery/pizza-menu-delivery.component';
import { PizzaMenuDeliveryRoutingModule } from './pizza-menu-routing.module';

@NgModule({
  imports: [
    PizzaMenuDeliveryRoutingModule,
    CommonModule
  ],
  declarations: [PizzaMenuDeliveryComponent]
})
export class PizzaMenuDeliveryModule { }