import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  //form grp
  //form array
  //form control name

  //form grp
registerForm=this.form.group({

  // form array
  username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  phoneNumber:['',[Validators.required,Validators.pattern('[0-9]*')]],
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})

constructor(private form:FormBuilder,private api:ApiService,private route:Router){}

register(){
  if(this.registerForm.valid){
    const username=this.registerForm.value.username
    const phoneNumber=this.registerForm.value.phoneNumber
    const email=this.registerForm.value.email
    const password=this.registerForm.value.password


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
      title: "Signed in successfully"
    });





    // alert("user registered successfully")

const body={username,phoneNumber,email,password}
this.api.registerApi(body).subscribe({
  next:(res:any)=>{
    console.log(body);
    this.route.navigateByUrl("user/login")
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
