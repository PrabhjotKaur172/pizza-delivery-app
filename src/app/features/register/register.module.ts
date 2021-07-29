import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserRegisterRoutingModule } from './register-routing.module';
import { UserRegisterComponent } from './user-register/user-register.component';

@NgModule({
  imports: [
    UserRegisterRoutingModule,
    CommonModule,
    FormsModule

  ],
  declarations: [UserRegisterComponent]
})
export class UserRegisterModule { }