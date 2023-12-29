import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  username:string="";
     password:string="";
     confirmPassword:string="";
     gender:string="";
     country:string="";
     licenseAgreement:boolean=false;

     msg:string="";

     RegisterClick(){
      this.msg = "Username : "+this.username+", Password:"+this.password
      +", ConfirmPassword:"+this.confirmPassword
      +", Gender : "+this.gender+", Country : "+this.country
      +", License Agreement : "+this.licenseAgreement;
    }

}
