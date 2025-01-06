import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-events',
  imports: [],
  templateUrl: './life-cycle-events.component.html',
  styleUrl: './life-cycle-events.component.css'
})
export class LifeCycleEventsComponent implements OnInit,OnChanges,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy {
  constructor(){
    console.log("constructor called..."); 
  }
  ngOnInit(): void {
      console.log("OnInit is called.....");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit is called.....");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked is called.....");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck is called.....");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit is called.....");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked is called.....");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy is called.....");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges is called.....");
}
}
