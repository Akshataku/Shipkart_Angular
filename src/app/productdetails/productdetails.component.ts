import { Component,OnInit } from '@angular/core';
import { ProductbyidService } from '../services/productbyid.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})

export class ProductdetailsComponent implements OnInit {

  productId:any;
  product:any;
  private apiUrl = "http://localhost:3000/products";

  constructor(private route:ActivatedRoute, private productbyidservice: ProductbyidService) {}

  ngOnInit(): void {
    
    //store id
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      // Handle the parameter change here
    });

    this.productbyidservice.getProductById(this.apiUrl,this.productId).subscribe((data)=>{
      console.warn("data",data);
      this.product = data;
      console.log('Product ',this.product);
    });
  }

  
  //add to kart
  add_to_kart(product:any){
    console.log(product);
    this.productbyidservice.insert_in_kart(product).subscribe(
      (response) =>{
        console.log('Added to kart',response);
        alert('Product added to kart');
        
      }
    );
  }
}



