import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
productId:any;
product:any;
  updateForm=this.form.group({
    Id:'',
  image:'',
  productName:'',
  price:'',
  category:'',
  description:''
  })


constructor(private form:FormBuilder,private api:ApiService,private route:ActivatedRoute,private router:Router){}


ngOnInit(): void {
  
  this.productId=this.route.snapshot.paramMap.get("id")
  console.log(this.productId);
  

  //single user

  this.api.getSingleProduct(this.productId).subscribe({
    next:(res:any)=>{
      console.log(res.data);
     this.updateForm.patchValue(res.data)

      
    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })
}







saveChanges(){
  this.api.updateProducts(this.updateForm.value,this.productId).subscribe({
    next:(res:any)=>{
      console.log(res);
      
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
        title: "Product updated successfully"
      });





      this.router.navigateByUrl('/admin/product')
      
    },
    error:(err:any)=>{
      console.log(err);
      alert('invalid')
      
    }
  })

}



}