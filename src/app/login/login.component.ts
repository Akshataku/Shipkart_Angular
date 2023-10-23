import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SocialAuthService } from '@abacritt/angularx-social-login';

import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService:UserDataService,
    private router:Router,
    private authService:SocialAuthService) {}

  //google  
  user:any;

  ngOnInit(): void{
    this.authService.authState.subscribe((user) => {
    this.user = user;

    this.userService.googleLogin(this.user).subscribe(
      (response) => {
        console.log('User logged in successfully',response);
        this.router.navigate(['/Product']);
      }
    );
    });
  }

  //manually
  data = {
    email:'',
    password:''
  }

  submitForm()
  {
    console.log(this.data)
    this.userService.normalLogin(this.data).subscribe(
      (response) => {
        console.log('User logged in successfully',response);
        this.router.navigate(['/Product']);
      }
    );
  }
}
