import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for-switch',
  imports: [FormsModule],
  templateUrl: './for-switch.component.html',
  styleUrl: './for-switch.component.css'
})
export class ForSwitchComponent {
  dayNumber:string="";
  cityArray:string[]=["Muzaffarngar","Mumbai","Noida","Gurgaon","Delhi"]
  studentList:any[]=[
    {StudentId:1, name:"Arya Tyagi",city:"Muzaffarnagar",isActive:false},
    {StudentId:2, name:"Mukul Tyagi",city:"Nawla",isActive:false},
    {StudentId:3, name:"Shivam Tyagi",city:"Chandpur",isActive:true},
    {StudentId:4, name:"Shagun Tyagi",city:"Nanu",isActive:false},
    {StudentId:5, name:"Sahul Pal",city:"Teharki",isActive:true},
    {StudentId:6, name:"Abhishek Rajput",city:"Tabitta",isActive:false},
  ]
}
