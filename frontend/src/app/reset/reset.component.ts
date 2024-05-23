import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { confirmPasswordValidator } from 'validators/passwordValidator';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  
  resetForm!:FormGroup
  token!:string
    
  constructor(private form:FormBuilder,private route:Router,private activate:ActivatedRoute,private api:ApiService){}
  
  ngOnInit(): void {
  this.resetForm=this.form.group(
    {
    password:['',Validators.required],
    confirmPassword:['',Validators.required]
  },
  {
    validator:confirmPasswordValidator('password','confirmPassword')
  }
);


this.activate.params.subscribe(val=>{
  this.token=val['token']
  console.log(this.token);
})

}

  reset(){
let resetObj={
  token:this.token,
  password:this.resetForm.value.password
}
this.api.resetPassword(resetObj).subscribe({
  next:(res:any)=>{
    console.log(res);
    alert('password reset successfully')
    this.resetForm.reset();
    this.route.navigate(["user/login"])
  },
  error:(err)=>{
  console.log(err);
  
  }
})

  }
}
