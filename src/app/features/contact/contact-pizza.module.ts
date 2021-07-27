import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactPizzaDeliveryComponent } from './contact-pizza-delivery/contact-pizza-delivery.component';
import { ContactPizzaDeliveryRoutingModule } from './contact-pizza-routing.module';

@NgModule({
  imports: [
    ContactPizzaDeliveryRoutingModule,
    CommonModule
  ],
  declarations: [ContactPizzaDeliveryComponent]
})
export class ContactPizzaDeliveryModule { }