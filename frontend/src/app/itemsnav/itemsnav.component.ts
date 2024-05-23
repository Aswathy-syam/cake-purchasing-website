import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-itemsnav',
  templateUrl: './itemsnav.component.html',
  styleUrls: ['./itemsnav.component.css']
})
export class ItemsnavComponent {

  searchKey:string ='';

constructor(private cart:CartService){}


  search(event:any){
this.searchKey=(event.target as HTMLInputElement).value;
console.log(this.searchKey);
this.cart.search.next(this.searchKey);
  }
}
