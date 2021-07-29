import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';


const ChildRoutes: Routes = [
  {
    path: 'register',
    component: UserRegisterComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ChildRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class UserRegisterRoutingModule { }
