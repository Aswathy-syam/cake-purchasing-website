import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})

  export class WishlistComponent implements OnInit {
    wishlist: any[] = [];
  
    constructor(private wishlistService: WishlistService) { }
  
    ngOnInit(): void {
      this.wishlistService.getWishlist().subscribe({
        next: (wishlist) => this.wishlist = wishlist
      });
    }
  
    removeFromWishlist(item: any) {
      this.wishlistService.removeFromWishlist(item);
    }
  }
