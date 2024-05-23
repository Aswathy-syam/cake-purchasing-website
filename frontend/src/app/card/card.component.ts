import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

   products :any=[];
   grandTotal !:number;


  constructor(private cart:CartService){}


ngOnInit(): void {
  this.cart.getProducts().subscribe({
    next:(res:any)=>{
this.products=res;
this.grandTotal=this.cart.getTotalPrice();
    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })
}

removeItem(item:any){
this.cart.removeCartItem(item)
}

emptycart(){
  this.cart.removeAllCart()
}

}
