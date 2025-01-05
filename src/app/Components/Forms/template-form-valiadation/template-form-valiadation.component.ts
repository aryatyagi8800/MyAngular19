import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form-valiadation',
  imports: [FormsModule],
  templateUrl: './template-form-valiadation.component.html',
  styleUrl: './template-form-valiadation.component.css'
})
export class TemplateFormValiadationComponent {
  studentObj:any={
    firstName:'',
    lastName:'',
    userName:'',
    city:'',
    state:'',
    zipCode:'',
    isAcceptTerms:false
  }
  formValue:any;

  onSubmit(){
    this.formValue=this.studentObj;
  }
}
