import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private user: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

    
  loginUser(userLoginObject: any) {
    this.user.loginUser(userLoginObject).subscribe(res => {
      if (res) {
        if(res != ("User not found" || "Please enter required fields")){
          this.router.navigate(['/']);

          //save data in local storage
            localStorage.setItem('userCredentials', JSON.stringify(res));
            console.log(res);
        }
        
      }
    });
    
  }

}
