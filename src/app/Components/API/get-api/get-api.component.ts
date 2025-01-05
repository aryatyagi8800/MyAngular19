import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  http=inject(HttpClient);
  constructor(){}

  userLists:any[]=[];
  productLists:any[]=[];

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

}
