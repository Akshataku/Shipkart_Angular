import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent} from './productdetails/productdetails.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'Product', component: ProductsComponent},
  {path:'Productdetails', component: ProductdetailsComponent},
  {path:'Product/:id', component: ProductdetailsComponent},
  {path:'Signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
