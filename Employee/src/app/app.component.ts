import { Component } from '@angular/core';
import { Employee } from 'src/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee';

  employees:Employee[] = [
    new Employee(101, "John", 5000),
    new Employee(102, "Smith", 5000),
    new Employee(103, "Nick", 6000),
    new Employee(104, "alex", 12000),
    new Employee(105, "george", 9000),
];
}
