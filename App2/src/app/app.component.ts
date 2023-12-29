import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  marks:number=20;

  mycolor:string="";

  constructor(){
      if(this.marks >= 35 ){
        this.mycolor="green";
      }else{
        this.mycolor="black";
      }
  }
}
