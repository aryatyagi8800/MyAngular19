import { AsyncPipe, CommonModule, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../../pipes/na.pipe';

@Component({
  selector: 'app-pipes',
  imports: [FormsModule,CommonModule,UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,JsonPipe,AsyncPipe,NaPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  firstName:string="Angular is javascript framework";
  currentDate:Date=new Date();
  currentTime:Observable<Date>=new Observable<Date>;
  student:any={
    name:"Arya",
    city:"Muzaffarnagar",
    empId:123,
    state:''
  }
  constructor(){
    this.currentTime=interval(1000).pipe(map(()=> new Date()));
  }
}
