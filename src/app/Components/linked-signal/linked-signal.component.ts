import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css'
})
export class LinkedSignalComponent {
  firstName=signal<string>("Arya");
  lastName=signal<string>("Tyagi");

  fullName=linkedSignal({
    source:this.firstName,
    computation:(newValue,prevValue)=>{
      const fullName=newValue+" "+this.lastName();
      return fullName;
    }
  })

  user=signal({
    id:8800,
    name:"arya"
  })

  email=linkedSignal({
    source:this.user,
    computation:user=>`${user.name+user.id}@gmail.com`,
    equal:(a:any,b:any)=>a.id!==b.id
  })

  changeName(){
    this.firstName.set("Dev")
  }
  changeId(){
 this.user.set({id:7700,name:"arya"})
  }
}
