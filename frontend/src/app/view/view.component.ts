import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
productId:any;
products:any=[];
public totalItem:number=0;

  constructor(private api:ApiService,private route:ActivatedRoute,private cart:CartService,private wish:WishlistService){}

  ngOnInit(): void {
  
    this.productId=this.route.snapshot.paramMap.get("id")
    console.log(this.productId);
    this.getProduct(); 

    //shopping card

    this.cart.getProducts().subscribe({
      next:(res:any)=>{
      console.log(res);
this.totalItem=res.length;
      },
      error:(err:any)=>{
      console.log(err);

      }
    })
}


getProduct=()=>{
  this.api.getSingleProduct(this.productId).subscribe({
    next:(res:any)=>{
      console.log(res.data);
      this.products=res.data

    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })
}



addtocart(product:any){
  this.cart.addtoCart(product)
  }

 
}