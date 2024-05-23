import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

public totalItem:number=0;
wishItem:number=0;
  constructor(private cart:CartService,private wish:WishlistService){}

  ngOnInit(): void {
    this.cart.getProducts().subscribe({
      next:(res:any)=>{
      console.log(res);
this.totalItem=res.length;
      },
      error:(err:any)=>{
      console.log(err);

      }
    })


    this.wish.getWishlist().subscribe({
      next:(res:any)=>{
        console.log(res);
  this.wishItem=res.length;
        },
        error:(err:any)=>{
        console.log(err);
  
        }
    })
  }
 
}
