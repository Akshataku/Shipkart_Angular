import { Component } from '@angular/core';

import {ProductsDataService} from './services/products-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shipkart';
  products:any;

  // constructor(private router:Router){}
  
  // goToPage(pageName : string):void {
  //   // alert("Button got clicked");
  //   this.router.navigate([`${pageName}`]);
  // }
  
  constructor(private productsData:ProductsDataService)
  {
    productsData.products().subscribe((data) =>{
      console.warn("data",data);
      this.products = data
    });
  }
}
