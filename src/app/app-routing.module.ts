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
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
