import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProgressBarComponent } from '../../../reusable/progress-bar/progress-bar.component';

@Component({
  selector: 'app-ng-if-and-ng-for',
  imports: [CommonModule,FormsModule,ProgressBarComponent],
  templateUrl: './ng-if-and-ng-for.component.html',
  styleUrl: './ng-if-and-ng-for.component.css'
})
export class NgIfAndNgForComponent {
  isDiv1Visiable:boolean=true;
  isDiv2Visiable:boolean=true;
  num1:string="";
  num2:string="";
  isActive:boolean=true;
  selectedState:string='';
  cityArray:string []=["Muzaffarnagar","Noida","Delhi","Gurgaon"];
  studentList:any[]=[
    {StudentId:1, name:"Arya Tyagi",city:"Muzaffarnagar",isActive:false,attendance:50},
    {StudentId:2, name:"Mukul Tyagi",city:"Nawla",isActive:false,attendance:90},
    {StudentId:3, name:"Shivam Tyagi",city:"Chandpur",isActive:true,attendance:74},
    {StudentId:4, name:"Shagun Tyagi",city:"Nanu",isActive:false,attendance:20},
    {StudentId:5, name:"Sahul Pal",city:"Teharki",isActive:true,attendance:34},
    {StudentId:6, name:"Abhishek Rajput",city:"Tabitta",isActive:false,attendance:59},
  ]
  constructor(private router:Router){

  }
  showDiv1(){
    this.isDiv1Visiable=true;
  }

  hideDiv1(){
    this.isDiv1Visiable=false;
  }
  hideShowDiv2(){
    this.isDiv2Visiable=!this.isDiv2Visiable
  }
  redirectToAttribute(){
    this.router.navigateByUrl("attribute-directive")
  }
}
