import { Component } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from './contact.service';
import { Contact1 } from './contact1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PostMappApp';

  contact: Contact=new Contact();

  constructor(private contactService: ContactService){}
  msg:string=""

  saveContact(){
    this.contactService.createContact(this.contact).
    subscribe(Response=> {
      this.msg=Response;
    })

 

  
}
}