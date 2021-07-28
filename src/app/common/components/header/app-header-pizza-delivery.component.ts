import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-pizza-delivery-component',
  templateUrl: './app-header-pizza-delivery.component.html',
  styleUrls: ['./app-header-pizza-delivery.component.css']
})
export class AppHeaderPizzaDeliveryComponent{

  constructor(private router: Router){}

    //navigate user to all products page
openMenuPage() {
  this.router.navigate(['/pizzaMenu/menu']);
}

openMenuDetailsPage(){
  this.router.navigate(['/pizzaMenuItemDetail/itemDetail']);
}

openCartPage(){
  this.router.navigate(['/pizzaCart/cart']);
}

openAboutPage(){
  this.router.navigate(['/about/aboutPizzaDelivery']);
}

openContactPage(){
  this.router.navigate(['/contact/contactPizzaDelivery']);
}

}
