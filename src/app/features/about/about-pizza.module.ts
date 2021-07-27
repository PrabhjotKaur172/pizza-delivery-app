import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutPizzaDeliveryComponent } from './about-pizza-delivery/about-pizza-delivery.component';
import { AboutPizzaDeliveryRoutingModule } from './about-pizza-routing.module';

@NgModule({
  imports: [
    AboutPizzaDeliveryRoutingModule,
    CommonModule
  ],
  declarations: [AboutPizzaDeliveryComponent]
})
export class AboutPizzaDeliveryModule { }