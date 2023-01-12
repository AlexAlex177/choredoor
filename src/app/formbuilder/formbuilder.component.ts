import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.scss']
})
export class FormbuilderComponent {

  constructor(private fb:FormBuilder){}

  cont = this.fb.group({
    name:['Rushi'],
    email:[''],
    contact:[''],
    address : this.fb.group({
      city:[''],
      pincode:['']
    })
  })
}
