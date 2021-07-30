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
  public currentItem: any;
  isInCart = false;
  public cart: any;
  public oldCartData: any;
  constructor(private router: Router) { 
    this.pizzaDetails = productsData;
  }

  openMenuDetailsPage(pizza: any){
    this.router.navigate(['/pizzaMenuItemDetail/itemDetail']), { state: { currentProductData: pizza} };
  }

  // navigate to add to cart section
  addProductToCart(product : any) {
    this.router.navigate(['/pizzaCart/cart']);
    let cartData: any[] = [];
    if(JSON.parse(localStorage.getItem('pizzasCartObject') || '[]')){
      this.oldCartData = JSON.parse(localStorage.getItem('pizzasCartObject') || '[]');
      if(this.oldCartData){
        this.oldCartData.forEach(function (value: any) {
          cartData.push(value);
        });
      }
      
    }
    this.cart = cartData;
    if (this.cart) {
      this.isInCart = this.cart.some((item: any) => item.id === product.id);
    } else {
      //this.cart = [];
    }

    if (this.isInCart) {
      this.cart.map((item: any) => {
        if (item.id === product.id) {
          product.selectedSize= "Large";
          product.productQuantities = 1;
          if(item.selectedSize === product.selectedSize){
            item.productQuantities += product.productQuantities;
            return item;
          }
          else{
            this.cart.push(product);
          }
        }
        
      });
    } else {
      product.selectedSize= "Large";
      product.productQuantities = 1;
      this.cart.push(product);
    }

    //save data in local storage------------------------------------
    localStorage.setItem('pizzasCartObject', JSON.stringify(this.cart));
  }

}
