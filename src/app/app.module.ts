import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonPizzaDeliveryModule } from './common/common-pizza-delivery.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonPizzaDeliveryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
