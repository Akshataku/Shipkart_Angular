import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  //get all products
  url = "http://localhost:3000/products";

  //get kart products
  karturl = "http://localhost:3000/kart";

  constructor(private http:HttpClient) { }
  
  products(){
    return this.http.get(this.url);
  }

  kartProducts(){
    return this.http.get(this.karturl);
  }
  
}
