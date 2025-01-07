import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  router=inject(Router);
  loggedUserData:any;
  constructor(){
    const loggedData=localStorage.getItem("userLogin");
    if(loggedData!==null){
      this.loggedUserData=JSON.parse(loggedData);
      // this.loggedUserData=loggedData;
    }
  }
  logOff(){
    const isLogOff=confirm("Are you sure to logOff");
    if(isLogOff==true){
      localStorage.removeItem('userLogin');
      localStorage.removeItem('loginToken');
    this.router.navigateByUrl('login');
    }
  }
}
