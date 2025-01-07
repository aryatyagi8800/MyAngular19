import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  imports: [CommonModule],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css'
})
export class NgContainerComponent {
  isContainer:boolean=true;
  isAPI:boolean=false;

  http=inject(HttpClient);

  userList: any[]=[];

  // ngOnInit(): void {
  //     this.getUser();
  // }

  getUser(){
    this.isAPI=true;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      this.userList=res;
      this.isAPI=false;
    })
  }
}
