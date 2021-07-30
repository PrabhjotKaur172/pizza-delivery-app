import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pizza-cart-delivery',
  templateUrl: './pizza-cart-delivery.component.html',
  styleUrls: ['./pizza-cart-delivery.component.css']
})
export class PizzaCartDeliveryComponent implements OnInit {

  public itemsAddedInCart: any;
  public sumTotal: any;
  
  constructor(private router: Router){
    
  }
  ngOnInit(){
    //this.itemsAddedInCart = [];
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
  //navigate user to the product's details page
  buyProducts(products : any) {
   // this.router.navigate(['/orderDetails/buyProducts'],{ state: { totalItemsInOrder: products } });
   alert("The order has been placed !!")
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
