import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http:HttpClient) { }

  getAllCustomer(){
    return this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCustomers")
  }
  createNewCustomer(obj:any){
    return this.http.post("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCustomer",obj)
  }
  updateCustomer(obj:any){
    return this.http.put("https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCustomer",obj);
  }
  deleteCustomer(id:any){
    return this.http.delete("https://freeapi.miniprojectideas.com/api/CarRentalApp/DeletCustomerById?id="+id)
  }
}
