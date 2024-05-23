import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

loginForm=this.form.group({

email:['',[Validators.required,Validators.email]],
password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]


})

  constructor(private form:FormBuilder,private api:ApiService,private  route:Router){}

  login(){

    if(this.loginForm.valid){
 
      const email=this.loginForm.value.email
    const password=this.loginForm.value.password
    
    console.log(`${email} ${password}`);

    const body={email,password}
    
    this.api.loginApi(body).subscribe({
      next:(res:any)=>{
        console.log(res.data);

        if(res.data.isAdmin=="true"){

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
            title: "Admin logged successfully"
          });
          this.loginForm.reset();
          this.route.navigateByUrl("/admin/dashboard")

        }


else{

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
    title: "user logged successfully"
  });

  this.loginForm.reset();
  this.route.navigateByUrl("")
}


        
       
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
    }
    else{
      
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
      title: "Signed in invalid"
    });
    }

}

}