import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Models/Employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees : Employee[] = [];
  employee: any = {}
  p : number = 1

  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployee()
  }

  getAllEmployee() {
    this.empService.getEmployees().subscribe(response => {
      this.employees = response
    })
  }

  submitForm() {
    if (Object.keys(this.employee).length > 0) {    
      this.updateEmployee(this.employee)
    } else {
      this.addEmployee()
      console.log(this.employee)
    }
  }

  addEmployee() {
    this.empService.addEmployee(this.employee).subscribe(
      response => {
        this.getAllEmployee();
      }
    )
  }

  updateEmployee(employee: Employee) {
    this.empService.updateEmployee(employee).subscribe(response => {
      this.getAllEmployee();
      this.employee = {}
    })
  }

  deleteEmployee(id : number) {
    this.empService.deleteEmployee(id).subscribe(response => {
      this.getAllEmployee();
      this.employee = {}
    })
  }

  populateForm(employee: Employee) {
    this.employee = employee;
  }

  log(x: any) {
    console.log(x)
  }
}
