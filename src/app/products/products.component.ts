import { Component } from '@angular/core';
import { ProductsDataService } from '../services/products-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {

  products:any;

  constructor(private productsData:ProductsDataService, private router:Router)
  {
    productsData.products().subscribe((data) =>{
      console.warn("data",data);
      this.products = data;
    });
  }

  store_id(product:any){
    
    this.router.navigate(['/Product',product._id]);
  }
}
