import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  city:string = "Hyderabad";
   salary:number= 752487500;
   n:number=0.72;
   person:object = {firstname:"Adam",lastname:"Smith"};
   dt:Date = new Date();
}
