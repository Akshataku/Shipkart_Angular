import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductbyidService {

  constructor(private http:HttpClient) { }

  //fetch product details ny id
  getProductById(apiUrl:string,productId:string): Observable<any>
  {
    const url = `${apiUrl}/${productId}`;
    return this.http.get(url);
  }

  //add to kart
  url = "http://localhost:3000/kart";

  insert_in_kart(product:any){
    return this.http.post(this.url,product);
  }
}
