import { Component, OnInit } from '@angular/core';
import { productsData } from './../../../data/products';

@Component({
  selector: 'app-home-pizza-delivery',
  templateUrl: './home-pizza-delivery.component.html',
  styleUrls: ['./home-pizza-delivery.component.css']
})
export class HomePizzaDeliveryComponent implements OnInit {
  public pizzaDetails;
  constructor() { 
    this.pizzaDetails = productsData;
  }

  ngOnInit(): void {
  }

}
