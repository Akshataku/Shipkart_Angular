import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Injectable } from '@angular/core';

import { SocialAuthService } from '@abacritt/angularx-social-login';
//import { SocialUser } from '@abacritt/angularx-social-login/public-api';
//import { SocialLoginModule } from '@abacritt/angularx-social-login/public-api';

import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  
  constructor(private authService: SocialAuthService,
    private userService: UserDataService,
    private router: Router) { }

  //google  
  user: any;
  loggedIn: any;
    
  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log("user->",user);
      this.loggedIn = (user != null);

      this.userService.postSocialSignup(this.user).subscribe(
        (response) => {
          console.log('User created Successfully',response);
          this.router.navigate(['/Product']);
        }
      );
    });
  }

  //manually
  data = {
    firstname:'',
    lastname:'',
    email:'',
    password:''
  }
  
  submitForm()
  {
    console.log(this.data)
    this.userService.postNormalSignup(this.data).subscribe(
      (response) => {
        console.log('User created Successfully',response);
        this.router.navigate(['/Product']);
      }
    );
  }
  

}
