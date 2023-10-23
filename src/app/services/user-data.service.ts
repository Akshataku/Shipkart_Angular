import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  //to save info from google
  baseUrl = "http://localhost:3000/user";

  //to save password also from registration
  Url = "http://localhost:3000/user/signup";

  //to login by password
  loginUrl = "http://localhost:3000/user/login";

  //to login by google info
  googleUrl = "http://localhost:3000/user/googlelogin";

  constructor(private http:HttpClient) { }

  postSocialSignup(user:any){
      return this.http.post(this.baseUrl,user);
  }

  postNormalSignup(data:any){
    return this.http.post(this.Url,data);
  }

  normalLogin(data:any){
    return this.http.post(this.loginUrl,data);
  }

  googleLogin(data:any){
    return this.http.post(this.googleUrl,data);
  }
}
