import { Component, Inject } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GetMappingIntegration';
  books:Book[] = [];

  constructor(@Inject(HttpClient)private http:HttpClient){}

 getData(){
    this.http.get<Book[]>("http://localhost:9090/books", {responseType : 'json'})
    .subscribe(data => {
      this.books = data;
    });
  }
}
