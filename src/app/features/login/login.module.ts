import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserLoginRoutingModule } from './login-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  imports: [
    UserLoginRoutingModule,
    CommonModule
  ],
  declarations: [UserLoginComponent]
})
export class UserLoginModule { }