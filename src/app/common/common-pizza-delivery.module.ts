import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { AppHeaderPizzaDeliveryComponent } from './components/header/app-header-pizza-delivery.component';
import { AppFooterPizzaDeliveryComponent } from './components/footer/app-footer-pizza-delivery.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AppHeaderPizzaDeliveryComponent,
    AppFooterPizzaDeliveryComponent
 
  ],
  exports: [
    AppHeaderPizzaDeliveryComponent,
    AppFooterPizzaDeliveryComponent
  ],
  providers: [
  
  ],
  entryComponents: [
   
  ]
})
export class CommonPizzaDeliveryModule { }
