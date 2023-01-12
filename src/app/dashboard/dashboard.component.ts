import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(){

  }

   cont = new FormGroup({
      name : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required,Validators.email]),
      contact : new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]+$'),Validators.maxLength(10)]),
      address : new FormGroup({
        city : new FormControl('',),
        pincode : new FormControl('') 
      })
   })

   get name(){
    return this.cont.get('name')
  }
  
  get email(){
    return this.cont.get('email')
  }
  
  get contact(){
    return this.cont.get('contact')
  }
}


