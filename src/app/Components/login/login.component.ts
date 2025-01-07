import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userObj:any={
    userName:"",
    password:""
  }
  userObj2:any={
    EmailId:"",
    Password:""
  }

  router=inject(Router);
  http=inject(HttpClient);
  // Password toggle properties
  passwordFieldType: string = 'password';
  passwordToggleText: string = 'Show';

  togglePasswordVisibility(): void {
    if (this.passwordFieldType === 'password') {
      this.passwordFieldType = 'text';
      this.passwordToggleText = 'Hide';
    } else {
      this.passwordFieldType = 'password';
      this.passwordToggleText = 'Show';
    }
  }

  // onLogin(){
  //   if(this.userObj.userName=="admin" && this.userObj.password=="1234"){
  //     alert("login success");
  //     localStorage.setItem('userLogin',this.userObj.userName)
  //     this.router.navigateByUrl('data-binding')
  //   }
  //   else{
  //     alert("invalid credentials")
  //   }
  // }
  onLogin(){
    this.http.post("https://projectapi.gerasim.in/api/UserApp/login",this.userObj2).subscribe((res:any)=>{
        alert("login success");
        localStorage.setItem('userLogin',JSON.stringify(res.data.userId));
        localStorage.setItem('loginToken',res.data.token)
        this.router.navigateByUrl('data-binding');
      },error=>{
        alert("invalid credentials");
      }
  )}
}
