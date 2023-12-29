import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  
  
  delmsg: string="";
  router: any;

  constructor(private service:ContactService){}

  contacts: Contact[] =[];

  getContacts(){
    this.service.getContacts().subscribe(response => {
      this.contacts=response;
    });
  }
    editContact(id:number){

      this.router.navigate(['/edit',id]);
    }

    deleteContact(id:number){

      this.service.deleteContactById(id).subscribe(response => {
        this.delmsg=response;
    });
    
    this.getContacts();
  }

}


