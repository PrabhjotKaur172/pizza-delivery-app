import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productsData } from './../../../data/products';

@Component({
  selector: 'app-pizza-menu-delivery',
  templateUrl: './pizza-menu-delivery.component.html',
  styleUrls: ['./pizza-menu-delivery.component.css']
})
export class PizzaMenuDeliveryComponent{
  public pizzaDetails;
  constructor(private router: Router) { 
    this.pizzaDetails = productsData;
  }

  openMenuDetailsPage(){
    this.router.navigate(['/pizzaMenuItemDetail/itemDetail']);
  }
  

}
