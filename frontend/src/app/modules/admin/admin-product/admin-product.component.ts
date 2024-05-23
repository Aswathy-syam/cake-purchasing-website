import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
allProducts:any=[];
searchKey:string='';

constructor(private api:ApiService){}


ngOnInit(): void {
 this.viewAllProducts();
}
//view all products
viewAllProducts=()=>{
  this.api.getAllProducts().subscribe({
    next:(res:any)=>{
      console.log(res.data);
      this.allProducts=res.data
      
    },

    error:(err:any)=>{
      console.log(err);
      
    }
  })
}




//delete produts

delete(id:any){
  this.api.deleteProducts(id).subscribe({
    next:(res:any)=>{
      console.log(res);
      this.viewAllProducts();
      
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "product deleted successfully"
      });


      
    },
    error:(err:any)=>{
      console.log(err);
      alert('invalid')
    }
  })
}

}
