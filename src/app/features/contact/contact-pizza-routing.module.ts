import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactPizzaDeliveryComponent } from './contact-pizza-delivery/contact-pizza-delivery.component';


const ChildRoutes: Routes = [
  {
    path: 'contactPizzaDelivery',
    component: ContactPizzaDeliveryComponent
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
export class ContactPizzaDeliveryRoutingModule { }
