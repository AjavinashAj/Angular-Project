import { Component } from '@angular/core';
import { Employee } from 'src/Employee';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  originalemployees:Employee[] = [
    new Employee(101, "John", 5000),
    new Employee(102, "Smith", 12000),
    new Employee(103, "Nick", 6000),
    new Employee(104, "Orlen", 8000),
    new Employee(105, "Charles", 9000),
];

employees:Employee[] = [];

constructor(){
   this.employees = this.originalemployees;
}

str:string = "";
sortcolumn = "empId";
order = 1;

onSearchClick(){
   this.employees = this.originalemployees.filter((emp) =>  {
      return emp.empname.toLowerCase().indexOf(this.str.toLowerCase()) >=0;});
}

onSortClick(){
  this.employees = this.originalemployees.sort((emp1,emp2) => {
        var n = 0;
        if(this.sortcolumn=="empId"){
           return (emp1[this.sortcolumn]-emp2[this.sortcolumn]) * this.order;
        }else if(this.sortcolumn=="empname"){
           return (emp1[this.sortcolumn].charCodeAt(0) - emp2[this.sortcolumn].charCodeAt(0)) * this.order;
        }else{
           return (emp1[this.sortcolumn] - emp2[this.sortcolumn]) * this.order;
        }
  });
}       
}
