import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-put-api',
  imports: [FormsModule],
  templateUrl: './put-api.component.html',
  styleUrl: './put-api.component.css'
})
export class PutApiComponent {
  http=inject(HttpClient);
    carLists:any[]=[];
    carObj:any={
        "carId": 0,
        "brand": "",
        "model": "",
        "year": "",
        "color": "",
        "dailyRate": "",
        "carImage": "",
        "regNo": ""
    }
    constructor(){
      this.getAllCars();
    }
  
    getAllCars(){
      this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").subscribe((res:any)=>{
        this.carLists=res.data;
      })
    }
    onSaveCar(){
      this.http.post("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar",this.carObj).subscribe((res:any)=>{
        if(res.result){
          alert("Car created successfully!")
        }
        else{
          alert(res.message);
        }
      })
    }
    onEdit(data:any){
      this.carObj=data;
    }
    onUpdate(){
      this.http.put("https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar",this.carObj).subscribe((res:any)=>{
        if(res.result){
          alert("Car updated successfully!")
        }
        else{
          alert(res.message);
        }
      })
    }
}
