import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Contact } from './contact';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private restUrl='http://localhost:9090/contact';

  constructor(private httpClient:HttpClient) { }
//for string return
  createContact(contact: Contact): Observable<string> {
    return this.httpClient.post(this.restUrl, contact,{responseType: 'text'});
}


}