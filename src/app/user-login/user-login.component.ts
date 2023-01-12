import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  signupUsers:any[] = [];
  signupObj:any = {
    userName:'',
    email:'',
    password:''
  };

  loginObj:any = {
    userName:'',
    password:''
  };

  constructor(){

  }
   
  ngOnInit(): void {
    const localdata = localStorage.getItem('signupUsers');
    if(localdata != null){
      this.signupUsers = JSON.parse(localdata);
    }
  }

  onSignup(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
    this.signupObj={
      userName:'',
      email:'',

      password:''
    };
  }

  onLogin(){
   
      const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
      if(isUserExist != undefined){
        alert("Login successfully")
      }
      else{
        alert('Wrong credentials');
      }
  }
}
