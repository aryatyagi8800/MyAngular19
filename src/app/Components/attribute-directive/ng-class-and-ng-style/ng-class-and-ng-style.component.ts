import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class-and-ng-style',
  imports: [FormsModule,CommonModule],
  templateUrl: './ng-class-and-ng-style.component.html',
  styleUrl: './ng-class-and-ng-style.component.css'
})
export class NgClassAndNgStyleComponent {
  divBgColor:string="bg-primary";
  div2BgColor:string="bg-warning";
  div2buttonColor:string="bg-danger";
  num1:string="";
  num2:string="";
  isCheckBoxActive:boolean=true;
  select:string="";
  customerStyle:any={
    'color':'red',
    'background-color':'yellow',
    'height':'200px',
    'width':'200px'
  }
  studentList:any[]=[
    {StudentId:1,gender:"male" , TotalMarks:96, name:"Arya Tyagi",city:"Muzaffarnagar",isActive:false},
    {StudentId:2,gender:"male" , TotalMarks:50, name:"Mukul Tyagi",city:"Nawla",isActive:false},
    {StudentId:3,gender:"male" , TotalMarks:86, name:"Shivam Tyagi",city:"Chandpur",isActive:true},
    {StudentId:4,gender:"male" , TotalMarks:56, name:"Shagun Tyagi",city:"Nanu",isActive:false},
    {StudentId:5,gender:"male" , TotalMarks:76, name:"Sahul Pal",city:"Teharki",isActive:true},
    {StudentId:6,gender:"male" , TotalMarks:26, name:"Abhishek Rajput",city:"Tabitta",isActive:false},
    {StudentId:7,gender:"female" , TotalMarks:26, name:"Rohini Rajput",city:"Bulandsher",isActive:true},
  ]

  addRedClass(){
    this.divBgColor="bg-danger";
  }
  addBlueClass(){
    this.divBgColor="bg-primary";
  }
  addRedBlueColor(){
    if(this.div2BgColor=="bg-warning"){
      this.div2BgColor="bg-primary";
      this.div2buttonColor="btn-primary"
    }
    else{
      this.div2BgColor="bg-warning";
      this.div2buttonColor="btn-warning";
    }
  }
}
