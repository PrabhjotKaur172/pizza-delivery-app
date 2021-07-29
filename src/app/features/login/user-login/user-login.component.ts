import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  public email= "";
  public password = "";

  userLoginObject = {
    "email" : this.email,
    "password" : this.password

  }

  constructor(private user: UserService) { }

  ngOnInit(): void {
  }

    
  loginUser(userLoginObject: any) {
    this.user.loginUser(userLoginObject).subscribe(res => {
      if (res) {
        alert(res);
      }
    });
  }

}
