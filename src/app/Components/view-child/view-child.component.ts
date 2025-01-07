import { Component, ElementRef, ViewChild } from '@angular/core';
import { TabsComponent } from '../../reusable/tabs/tabs.component';

@Component({
  selector: 'app-view-child',
  imports: [],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent {
  @ViewChild('txt') textBox?: ElementRef;
  @ViewChild(TabsComponent) myTabViewChild?: TabsComponent;
  inputValue:string="";

  getData(){
    const value=this.textBox?.nativeElement.value;
    this.inputValue=value;
    if(this.textBox){
      this.textBox.nativeElement.style.color="red";
    }
    const tabValue=this.myTabViewChild?.tabList;
    console.log(tabValue);
    
  }
}
