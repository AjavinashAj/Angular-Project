import { Component } from '@angular/core';
import { Employee } from 'src/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee_with_delete_';
  employees:Employee[] = [
    new Employee(101, "John", 5000),
    new Employee(102, "Smith", 5000),
    new Employee(103, "Nick", 6000),
    new Employee(104, "Ashok", 8000)
];

newemployee:Employee = new Employee(0,"",0);

onInsertClick(){
   this.employees.push(new Employee(this.newemployee.empId,this.newemployee.empname,this.newemployee.salary));
    this.newemployee.empId = 0;
    this.newemployee.empname = "";
    this.newemployee.salary = 0;
}

onDeleteClick(n:number){
   if(confirm("Are you sure to delete this emp?")){
      this.employees.splice(n,1);
   }
}
  
}
