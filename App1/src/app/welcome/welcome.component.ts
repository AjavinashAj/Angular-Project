import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  
  name: string="avi";
  rollNo: number =20;
  class:number =5;

  handleSubmitBtn(){
    this.name="alex";
    this.rollNo=45;
    this.class=6;
  }

}
