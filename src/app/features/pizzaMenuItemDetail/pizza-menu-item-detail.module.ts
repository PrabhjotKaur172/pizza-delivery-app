import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PizzaMenuItemDetailDeliveryComponent } from './pizza-menu-item-detail-delivery/pizza-menu-item-detail-delivery.component';
import { PizzaMenuItemDetailRoutingModule } from './pizza-menu-item-detail-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    PizzaMenuItemDetailRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [PizzaMenuItemDetailDeliveryComponent]
})
export class PizzaMenuItemDetailModule { }