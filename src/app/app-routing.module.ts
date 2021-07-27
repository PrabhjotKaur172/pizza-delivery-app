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

    }
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
