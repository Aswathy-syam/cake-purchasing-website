import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AsyncPipe, NgIf } from '@angular/common';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit{
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    allProducts:any=[];
    public totalItem:number=0;
    products:any=[]
    
    wishItem:number=0+1;
    searchKey:string='';
    filterCategory:any;
   

    constructor(private api:ApiService,private cart:CartService,private wish:WishlistService){}
   
    ngOnInit(): void {
      this.viewAllProducts();
      // this.filteredProducts = this.allProducts;
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


      // wishlist
      this.wish.getWishlist().subscribe({
        next:(res:any)=>{
        console.log(res);
       this.wishItem=res.length
 
        },
        error:(err:any)=>{
        console.log(err);
  
        }
      })


    }




    

    viewAllProducts=()=>{
     this.api.getAllProducts().subscribe({
       next:(res:any)=>{
         console.log(res.data);
         this.allProducts=res.data;
       
        this.filterCategory=res.data
// console.log(this.filterCategory);

       
          this.allProducts.forEach((a:any)=>{
          Object.assign(a,{quantity:1, total:a.price});
          console.log(a.quantity);
          
          });
          
        this.cart.search.subscribe((val:any)=>{
          this.searchKey=val;
        })


       },
       error:(err:any)=>{
         console.log(err);
         
       }
     })
    }
      
    addtocart(product:any){
      this.cart.addtoCart(product)
      }

      addToWishlist(product: any) {
        this.wish.addToWishlist(product);
      }
      //filter
      filter(category:string){
        this.filterCategory=this.allProducts
        .filter((a:any)=>{
        if(a.category==category || category==''){
          return a;
        }
        })
        
      }






      
  }