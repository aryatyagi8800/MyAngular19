import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-template',
  imports: [CommonModule,FormsModule],
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.css'
})
export class NgTemplateComponent {
  isUserLoggedIn:boolean=true;
  loggedUserName:string="Arya";

  @ViewChild('dynamicTemp') dynamicTemplate:TemplateRef<any> | undefined;
  @ViewChild('dyanamicContainer',{read:ViewContainerRef}) dynamicCont: ViewContainerRef | undefined;

  loadTemplate(){
    if(this.dynamicTemplate){
      this.dynamicCont?.createEmbeddedView(this.dynamicTemplate);
    }
  }
}
