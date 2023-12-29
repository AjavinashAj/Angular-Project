import { Component } from '@angular/core';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.css']
})
export class Practice1Component {

  marks:number=80;
  myclass:string="";

  constructor(){
      if(this.marks >=35 ){
        this.myclass="class1";
      }else{
        this.myclass="class2";
      }
  }

}
