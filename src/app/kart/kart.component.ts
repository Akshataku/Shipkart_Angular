import { Component } from '@angular/core';

import { ProductsDataService } from '../services/products-data.service';

@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.css']
})
export class KartComponent {

  kartproducts:any;

  constructor(private productsData:ProductsDataService){
    
    this.productsData.kartProducts().subscribe(
      (data) => {
        this.kartproducts = data;
      });
  }
}
