import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProgressBarComponent } from '../../../reusable/progress-bar/progress-bar.component';

@Component({
  selector: 'app-if-else',
  imports: [FormsModule,ProgressBarComponent],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {
  div1Visiable:boolean=true;
  div2Visiable:boolean=true;
  num1:string="";
  num2:string="";
  selectedStatus:string="";

  hideDiv1(){
    this.div1Visiable=false
  }
  showDiv1(){
    this.div1Visiable=true;
  }
  toggleDiv2(){
    this.div2Visiable=!this.div2Visiable;
  }
}
