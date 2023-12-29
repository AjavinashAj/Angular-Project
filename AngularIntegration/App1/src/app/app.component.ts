import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App1';

  message:string="";

  constructor(@Inject(HttpClient)private http:HttpClient){}

  getData(){
    this.http.get("http://localhost:9090/welcome", {responseType : 'text'})
    .subscribe(data => {
      this.message = data;
    });
  }

}
