import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent} from './productdetails/productdetails.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'Product', component: ProductsComponent},
  {path:'Product/:id', component: ProductdetailsComponent},
  {path:'Signup', component: SignupComponent},
  {path:'Login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
