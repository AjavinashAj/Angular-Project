import { Component } from '@angular/core';

@Component({
  selector: 'app-practice2',
  templateUrl: './practice2.component.html',
  styleUrls: ['./practice2.component.css']
})
export class Practice2Component {

  marks:number=8;
  b:boolean;

     constructor(){
         if(this.marks >=35 ){
           this.b=true;
         }else{
           this.b=false;
         }
     }

}
