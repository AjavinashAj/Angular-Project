import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl="http://localhost:9090"

  constructor(private httpClient:HttpClient) { }
//for postmapping
  createContact(contact: Contact) :Observable<String> {

    return this.httpClient.post(`${this.baseUrl}/save`, contact,{responseType: 'text'});
  }

//for get all contacts
getContacts(): Observable<Contact[]>{
  return this.httpClient.get<Contact[]>(`${this.baseUrl}/retriveAll`);
}

//for retrieve single contacts by using contactId
findContactbyId(id:number): Observable<Contact>{
  return this.httpClient.get<Contact>(`${this.baseUrl}/retrive/${id}`);
}

//for delete single contact by id
deleteContactById(id:number):Observable<string>{
  return this.httpClient.delete(`${this.baseUrl}/delete/${id}`,{responseType: "text"});
}


}
