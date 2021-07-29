import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-pizza-delivery-component',
  templateUrl: './app-header-pizza-delivery.component.html',
  styleUrls: ['./app-header-pizza-delivery.component.css']
})
export class AppHeaderPizzaDeliveryComponent implements OnInit{
  userCredentials: any;

  constructor(private router: Router){
    if(JSON.parse(localStorage.getItem('userCredentials') || '[]')){
      this.userCredentials = JSON.parse(localStorage.getItem('userCredentials') || '[]');
      console.log("constructor",this.userCredentials);
    }
    
  }
  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('userCredentials') || '[]')){
      this.userCredentials = JSON.parse(localStorage.getItem('userCredentials') || '[]');
      console.log("ngOnInit",this.userCredentials);
    }
  }

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

userRegister(){
  this.router.navigate(['/user/register']);
}

userLogin(){
  this.router.navigate(['/userLogin/login']);
}

userLogout(){
  localStorage.setItem('userCredentials', '');
  this.ngOnInit();
  this.router.navigate(['/']);
 
}

}
