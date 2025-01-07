import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent implements OnInit {
  http=inject(HttpClient);
  constructor(){}

  userLists:any[]=[];
  productLists:any[]=[];

  ngOnInit(): void {
      this.getData();
      this.getAllusers();
  }

  getData(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      this.userLists=result;
    })
  }
  getProducts(){
    this.http.get("https://fake-store-api.mock.beeceptor.com/api/products").subscribe((result:any)=>{
      this.productLists=result;
    })
  }
  getAllusers(){
    this.http.get("https://projectapi.gerasim.in/api/UserApp/GetAllUsers").subscribe((res:any)=>{

    })
  }

}
