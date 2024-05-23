import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {

forgotForm=this.form.group({
  email:['',[Validators.required,Validators.email]],
})

constructor(private form:FormBuilder,private api:ApiService ){}


submit(){
this.api.sendEmail(this.forgotForm.value.email).subscribe({
  next:(res:any)=>{
    console.log(res);
    alert('email send successfully')
    this.forgotForm.reset();
  },
  error:(err)=>{
  console.log(err);
  
  }
})

}
}
