import { Component } from '@angular/core';
import { CustomerServiceService } from '../../services/customer-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud-api-service',
  imports: [FormsModule],
  templateUrl: './crud-api-service.component.html',
  styleUrl: './crud-api-service.component.css'
})
export class CrudApiServiceComponent {
  customerLists: any[]=[];
  customerObj:any={
    "customerId": 0,
    "customerName": "",
    "customerCity": "",
    "mobileNo": "",
    "email": ""
  }

  constructor(private customerService:CustomerServiceService){
    this.getAllCustomers();
  }
  getAllCustomers(){
    this.customerService.getAllCustomer().subscribe((res:any)=>{
      this.customerLists=res.data;
    })
  }
  customerSave(){
    this.customerService.createNewCustomer(this.customerObj).subscribe((res:any)=>{
      if(res.result){
        alert("Customer Created Successfully!!");
        this.getAllCustomers();
      }
      else{
        alert(res.message);
      }
    })
  }
  onEdit(data:any){
    this.customerObj=data;
  }
  onUpdate(){
    this.customerService.updateCustomer(this.customerObj).subscribe((res:any)=>{
      if(res.result){
        alert("Customer Updated Successfully!!");
        this.getAllCustomers();
      }
      else{
        alert(res.message);
      }
    })
  }
  onDelete(id:any){
    this.customerService.deleteCustomer(id).subscribe((res:any)=>{
      if(res.result){
        alert("Customer Deleted Successfully!!");
        this.getAllCustomers();
      }
      else{
        alert(res.message);
      }
    })
  }
}
