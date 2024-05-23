import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  SERVER_URL="http://localhost:7000"

  constructor(private http:HttpClient) { }


//register
registerApi=(user:any)=>{
return this.http.post(`${ this.SERVER_URL}/auth/register`,user)
}

//login

loginApi=(user:any)=>{
return this.http.post(`${this.SERVER_URL}/auth/login`,user)
}


//send email

sendEmail=(email:any)=>{
  return this.http.post(`${this.SERVER_URL}/auth/send-email`,{email});
}

//reset password

resetPassword=(resetObj:any)=>{
  return this.http.post(`${this.SERVER_URL}/auth/reset-password`,resetObj);
}

//get users

getUsers=()=>{
  return this.http.get(`${this.SERVER_URL}/user/get-user`);
}

//delete user

deleteUsers=(id:any)=>{
  return this.http.delete(`${this.SERVER_URL}/user/delete/${id}`)
}

// add product

addProducts=(product:any)=>{
  return this.http.post(`${this.SERVER_URL}/product/add-product`,product)
}

//view products

getAllProducts=()=>{
  return this.http.get(`${this.SERVER_URL}/product/view-product`)
}

//delete product

deleteProducts=(id:any)=>{
  return this.http.delete(`${this.SERVER_URL}/product/delete-product/${id}`)
}

//update product

updateProducts=(product:any,id:any)=>{
  return this.http.put(`${this.SERVER_URL}/product/update-product/${id}`,product)
}

//view in single product


getSingleProduct=(id:any)=>{
  return this.http.get(`${this.SERVER_URL}/product/single-product/${id}`)
}



}
