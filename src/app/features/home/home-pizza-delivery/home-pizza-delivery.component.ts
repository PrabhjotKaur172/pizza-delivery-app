import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productsData } from './../../../data/products';

@Component({
  selector: 'app-home-pizza-delivery',
  templateUrl: './home-pizza-delivery.component.html',
  styleUrls: ['./home-pizza-delivery.component.css']
})
export class HomePizzaDeliveryComponent{
  public pizzaDetails;
  constructor(private router: Router) { 
    this.pizzaDetails = productsData;
  }

  openMenuPage() {
    this.router.navigate(['/pizzaMenu/menu']);
  }

  openMenuDetailsPage(){
    this.router.navigate(['/pizzaMenuItemDetail/itemDetail']);
  }
  
  
}
