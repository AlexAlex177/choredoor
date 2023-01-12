import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(){}


  checkFunction(val:string){
    console.log(val);
  }

  userModel = new User("","","","");

}
