// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  
  signupUsers:any[] = [];
  signupObj:any = {
    userName:'',
    email:'',
    password:''
  };

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



  // public input: any;
 
  // public constructor(private http: HttpClient, private router: Router) {
  //   this.input = {
  //     'firstname': '',
  //     'lastname': '',
  //     'email': '',
  //     'password': ''
  //   };
  // }
 
  // ngOnInit(): void { }
 
  // public register() {
  //   if (this.input.email && this.input.password) {
  //     let headers = new HttpHeaders({ 'content-type': 'application/json' });
  //     this.http.post('http://localhost:3000/account', JSON.stringify(this.input), { headers: headers })
  //       .subscribe(() =>
  //         this.router.navigate(['/login'])
  //       );
  //   }
  // }

}
