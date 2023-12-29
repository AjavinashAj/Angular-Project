import { Component } from '@angular/core';

@Component({
  selector: 'app-practice3',
  templateUrl: './practice3.component.html',
  styleUrls: ['./practice3.component.css']
})
export class Practice3Component {

  marks:number=80;
     b:boolean;

     constructor(){
         if(this.marks >=35 ){
           this.b=true;
         }else{
           this.b=false;
         }
     }

}
