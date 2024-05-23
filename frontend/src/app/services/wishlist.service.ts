import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlistSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public wishlist$: Observable<any[]> = this.wishlistSubject.asObservable();

  constructor() { }

  addToWishlist(item: any) {
    const currentWishlist = this.wishlistSubject.getValue();
    this.wishlistSubject.next([...currentWishlist, item]);
  }

  removeFromWishlist(item: any) {
    const currentWishlist = this.wishlistSubject.getValue();
    this.wishlistSubject.next(currentWishlist.filter(w => w !== item));
  }

  getWishlist(): Observable<any[]> {
    return this.wishlist$;
  }
}
