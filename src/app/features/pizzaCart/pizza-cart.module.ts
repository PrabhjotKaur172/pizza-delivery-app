import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PizzaCartDeliveryComponent } from './pizza-cart-delivery/pizza-cart-delivery.component';
import { PizzaCartDeliveryRoutingModule } from './pizza-cart-routing.module';

@NgModule({
  imports: [
    PizzaCartDeliveryRoutingModule,
    CommonModule
  ],
  declarations: [PizzaCartDeliveryComponent]
})
export class PizzaCartDeliveryModule { }