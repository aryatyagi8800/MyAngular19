import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProgressBarComponent } from '../../../reusable/progress-bar/progress-bar.component';
import { TabsComponent } from '../../../reusable/tabs/tabs.component';

@Component({
  selector: 'app-for-switch',
  imports: [FormsModule,ProgressBarComponent,TabsComponent],
  templateUrl: './for-switch.component.html',
  styleUrl: './for-switch.component.css'
})
export class ForSwitchComponent {
  customerTabs:string[]=["Basic info","Plan Info","payment"]
  dayNumber:string="";
  cityArray:string[]=["Muzaffarngar","Mumbai","Noida","Gurgaon","Delhi"];
  currTab:string="";
  studentList:any[]=[
    {StudentId:1, name:"Arya Tyagi",city:"Muzaffarnagar",isActive:false},
    {StudentId:2, name:"Mukul Tyagi",city:"Nawla",isActive:false},
    {StudentId:3, name:"Shivam Tyagi",city:"Chandpur",isActive:true},
    {StudentId:4, name:"Shagun Tyagi",city:"Nanu",isActive:false},
    {StudentId:5, name:"Sahul Pal",city:"Teharki",isActive:true},
    {StudentId:6, name:"Abhishek Rajput",city:"Tabitta",isActive:false},
  ]
  onTabChange(tab:string){
    this.currTab=tab;
  }
}
