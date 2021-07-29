import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./features/home/home-pizza-delivery.module').then(m => m.HomePizzaDeliveryModule)

    },
    {
      path: 'pizzaMenu',
      loadChildren: () => import('./features/pizzaMenu/pizza-menu.module').then(m => m.PizzaMenuDeliveryModule)

    },
    {
      path: 'pizzaCart',
      loadChildren: () => import('./features/pizzaCart/pizza-cart.module').then(m => m.PizzaCartDeliveryModule)

    },
    {
      path: 'pizzaMenuItemDetail',
      loadChildren: () => import('./features/pizzaMenuItemDetail/pizza-menu-item-detail.module').then(m => m.PizzaMenuItemDetailModule)

    },
    {
      path: 'about',
      loadChildren: () => import('./features/about/about-pizza.module').then(m => m.AboutPizzaDeliveryModule)

    },
    {
      path: 'contact',
      loadChildren: () => import('./features/contact/contact-pizza.module').then(m => m.ContactPizzaDeliveryModule)

    },
    {
      path: 'user',
      loadChildren: () => import('./features/register/register.module').then(m => m.UserRegisterModule)

    },
    {
      path: 'userLogin',
      loadChildren: () => import('./features/login/login.module').then(m => m.UserLoginModule)

    }
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
