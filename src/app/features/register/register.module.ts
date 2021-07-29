import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserRegisterRoutingModule } from './register-routing.module';
import { UserRegisterComponent } from './user-register/user-register.component';

@NgModule({
  imports: [
    UserRegisterRoutingModule,
    CommonModule
  ],
  declarations: [UserRegisterComponent]
})
export class UserRegisterModule { }