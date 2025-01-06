import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Car } from '../../../model/class/car';
import { IcarList } from '../../../model/interface/icar-list';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {
  http=inject(HttpClient);
  carLists:IcarList[]=[];
  carObj:Car=new Car();
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
        alert("Car created successfully!");
        this.carObj=new Car();
      }
      else{
        alert(res.message);
      }
    })
  }
}
