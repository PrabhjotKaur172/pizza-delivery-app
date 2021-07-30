import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pizza-cart-delivery',
  templateUrl: './pizza-cart-delivery.component.html',
  styleUrls: ['./pizza-cart-delivery.component.css']
})
export class PizzaCartDeliveryComponent implements OnInit {

  public itemsAddedInCart: any;
  public sumTotal: any;
  public untrustedUrl: any;
  public genuineUrl: any;
  
  constructor(private router: Router,
    public sanitizer: DomSanitizer){
      this.untrustedUrl = "javascript:alert('The order has been placed!!')";
      this.genuineUrl = this.sanitizer.bypassSecurityTrustUrl(this.untrustedUrl);
  }
  ngOnInit(){
    this.itemsAddedInCart =  JSON.parse(localStorage.getItem('pizzasCartObject') || '[]');
                              
    this.sumTotalOfProducts();
  }
  
  sumTotalOfProducts(){
    this.sumTotal = 0;
    if(this.itemsAddedInCart){
      for(let i=0;i<this.itemsAddedInCart.length;i++) {
       this.sumTotal = this.sumTotal + (this.itemsAddedInCart[i].price * this.itemsAddedInCart[i].productQuantities);
 
      }
 
     }
  }
  // remove item from the cart
  removeProductFromCart(currentItem : any){
    let updatedCartItems = this.itemsAddedInCart;
    this.itemsAddedInCart.forEach(function (value : any,index : any) {
      if(value.id === currentItem.id){
        if(value.selectedSize === currentItem.selectedSize){
          updatedCartItems.splice(index, 1);
        }
      }
    });
    this.itemsAddedInCart = updatedCartItems;
    //save data in local storage------------------------------------
    localStorage.setItem('pizzasCartObject', JSON.stringify(this.itemsAddedInCart));
    this.sumTotalOfProducts();
  }

}
