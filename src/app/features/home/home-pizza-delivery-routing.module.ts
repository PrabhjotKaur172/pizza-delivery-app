import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePizzaDeliveryComponent } from './home-pizza-delivery/home-pizza-delivery.component';


const ChildRoutes: Routes = [
  {
    path: '',
    component: HomePizzaDeliveryComponent
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
export class HomePizzaDeliveryRoutingModule { }
