import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-api',
  imports: [FormsModule],
  templateUrl: './delete-api.component.html',
  styleUrl: './delete-api.component.css'
})
export class DeleteApiComponent {
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
            this.getAllCars();
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
            this.getAllCars();
          }
          else{
            alert(res.message);
          }
        })
      }
      onDelete(id:any){
        const isDelete=confirm("Are you sure want to delete car");
        if(isDelete==true){
          this.http.delete("https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarId?carid="+id).subscribe((res:any)=>{
            if(res.result){
              alert("Car deleted successfully!")
              this.getAllCars();
            }
            else{
              alert(res.message);
            }
          })
        }
      }
}
