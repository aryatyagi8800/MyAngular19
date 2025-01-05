import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
  firstName=signal("Arya");
  lastName=signal<string>("Tyagi");
  courseName:string="Angular";
  rollNo=signal<number>(0);

  constructor(){
    const value=this.firstName();
    setTimeout(()=>{
      this.courseName="Angular 19";
      this.firstName.set("Dev");
    },5000)
  }
  increment(){
    this.rollNo.update((oldValue)=>{
      return oldValue+1;
    })
  }
  decrement(){
    this.rollNo.update((oldValue)=>{
      return oldValue-1;
    })
  }
}
