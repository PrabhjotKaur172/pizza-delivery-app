import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutPizzaDeliveryComponent } from './about-pizza-delivery/about-pizza-delivery.component';


const ChildRoutes: Routes = [
  {
    path: 'aboutPizzaDelivery',
    component: AboutPizzaDeliveryComponent
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
export class AboutPizzaDeliveryRoutingModule { }
