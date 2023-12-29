import { Injectable } from '@angular/core';
import { Contact1 } from './contact1';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Contact1Service {

  private restUrl='http://localhost:9090/contacts';

  constructor(private httpClient:HttpClient) { }

  //for return object
createContact1(contact: Contact1): Observable<Contact1[]> {
  return this.httpClient.post<Contact1[]>(this.restUrl, contact,{responseType: 'json'});
}
}
