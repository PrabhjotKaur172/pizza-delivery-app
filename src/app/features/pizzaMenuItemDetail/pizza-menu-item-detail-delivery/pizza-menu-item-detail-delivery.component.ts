import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pizza-menu-item-detail-delivery',
  templateUrl: './pizza-menu-item-detail-delivery.component.html',
  styleUrls: ['./pizza-menu-item-detail-delivery.component.css']
})
export class PizzaMenuItemDetailDeliveryComponent implements OnInit{
  public currentItem: any;
  isInCart = false;
  public cart: any;
  public oldCartData: any;
  
  constructor(public router: Router) {
    //this.currentItem = this.router.getCurrentNavigation()?.extras?.state?.currentProductData;
    this.currentItem = {
      "id" : "1",
      "name" : "Italian Pizza",
      "details" : "This is an italian pizza",
      "rating" : "4",
      "price" : "25.00",
      "image" : "./../../../../assets/images/pizza-1.jpg"
    };
    this.currentItem.productQuantities = 1;
    this.currentItem.selectedSize = "Large";
  }

  ngOnInit(): void {
    // this.currentItem = this.router.getCurrentNavigation()?.extras?.state?.currentProductData;
    // this.currentItem.productQuantities = 1;
    // this.currentItem.selectedSize = "Large";
  }

  sizeChanged(size: string){
    if(size == "Medium"){
        this.currentItem.price = "18.00"
    } else if(size == "Small"){
        this.currentItem.price = "12.00"
    } else{
      this.currentItem.price = "25.00"
    }
  
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
          product.selectedSize= product.selectedSize || "Large";
          product.productQuantities = product.productQuantities || 1;
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
      product.selectedSize= product.selectedSize || "Large";
      product.productQuantities = product.productQuantities || 1;
      this.cart.push(product);
    }

    //save data in local storage------------------------------------
    localStorage.setItem('pizzasCartObject', JSON.stringify(this.cart));
  }

}
