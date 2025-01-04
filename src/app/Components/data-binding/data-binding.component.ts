import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstName:string="Arya Tyagi";
  RollNo:number=21;
  isAvtive:boolean=true;
  currentDate:Date=new Date();
  myPlaceHolder:string="Enter name";
  bgClass:string="bg-primary";
  selectedCity:string="";

  showWelcomeMessage(){
    alert("Hello I am Event Binding")
  }
  onCityChange(){
    alert("City Changed");
  }
}
