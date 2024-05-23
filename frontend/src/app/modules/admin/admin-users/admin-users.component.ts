import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit{
allUsers:any=[];
searchKey:string='';


  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getAllUsers();
  }



getAllUsers=()=>{
  this.api.getUsers().subscribe({
    next:(res:any)=>{
      this.allUsers=res.data
console.log(this.allUsers);

    },
    error:(err:any)=>{
console.log(err);

    }
  })
}



//delete

deleteUser(id:any){

  this.api.deleteUsers(id).subscribe({
    next:(res:any)=>{
      console.log(res);
      this.getAllUsers();
      
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
        title: "user deleted"
      });







    },
    error:(err:any)=>{
      console.log(err);
      alert('invalid')
    }
  })




}

}
