import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePizzaDeliveryRoutingModule } from './home-pizza-delivery-routing.module';
import { HomePizzaDeliveryComponent } from './home-pizza-delivery/home-pizza-delivery.component';

@NgModule({
  imports: [
    HomePizzaDeliveryRoutingModule,
    CommonModule
  ],
  declarations: [HomePizzaDeliveryComponent]
})
export class HomePizzaDeliveryModule { }