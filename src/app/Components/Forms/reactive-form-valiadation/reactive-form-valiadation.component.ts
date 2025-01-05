import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-valiadation',
  imports: [JsonPipe,FormsModule,ReactiveFormsModule],
  templateUrl: './reactive-form-valiadation.component.html',
  styleUrl: './reactive-form-valiadation.component.css'
})
export class ReactiveFormValiadationComponent {
  studentForm:FormGroup=new FormGroup({
    firstName:new FormControl("",[Validators.required,Validators.minLength(4)]),
    lastName:new FormControl(),
    userName:new FormControl("",Validators.email),
    city:new FormControl(),
    state:new FormControl("Uttar pradesh"),
    zipCode:new FormControl(),
    isAcceptTerms:new FormControl(),
  });

  formValue:any;

  constructor(){
    this.studentForm.controls['state'].disable();
    setTimeout(()=>{
      this.studentForm.controls['state'].enable();
    },5000)
  }

  onSave(){
    this.formValue=this.studentForm.value;
  }
}
