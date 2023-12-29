import { Component } from '@angular/core';
import { Contact1Service } from '../contact1.service';
import { Contact1 } from '../contact1';

@Component({
  selector: 'app-contact1',
  templateUrl: './contact1.component.html',
  styleUrls: ['./contact1.component.css']
})
export class Contact1Component {


  constructor(private contact1Service: Contact1Service){}

 //for storing object response in empty array
  contact1: Contact1=new Contact1();
  contacts: Contact1[]=[];

  saveContact1(){
    this.contact1Service.createContact1(this.contact1).
    subscribe(Response=> {
      this.contacts=Response;
    })
  }
}
