import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUserData(data: any) {
    return this.http.post(Constants.URL+'register', data);
  }

  loginUser(data: any) {
    return this.http.post(Constants.URL+'login', data);
  }
 
}
