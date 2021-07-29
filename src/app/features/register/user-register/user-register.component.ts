import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  public email= "";
  public username = "";
  public password = "";

  userRegisterObject = {
    "email" : this.email,
    "username" : this.username,
    "password" : this.password

  }
  constructor(private user: UserService) {  
  
  }

  ngOnInit(): void {
  }
  
  registerNewUser(userRegisterObject: any) {
    this.user.registerUserData(userRegisterObject).subscribe(res => {
      if (res) {
        alert("User has been registered successfully.");
      }
    });
  }


}
