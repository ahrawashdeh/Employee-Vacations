import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Employee } from '../Models/Employee';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = environment.apiUrl;
  employeesVacations: Employee[] =[];
  employees: Employee[] =[]

  constructor(private http: HttpClient) { 

  }

  getEmployeeVacations() {
    return this.http.get<Employee[]>(this.baseUrl + 'employee/employee-vacations')
    // .pipe(
    //   map(employees => {
    //     console.log(employees)
    //     this.employeesVacations = employees;
    //     return employees
    //   })
    // )
  }

  getEmployees() {
    return this.http.get<Employee[]>(this.baseUrl + 'employee')
    // .pipe(
    //   map(employees => {
    //     this.employees = employees;
    //     return employees
    //   })
    // )
  }

  addEmployee(employee: Employee) {
    return this.http.post<Employee>(this.baseUrl + 'employee/add-employee', employee);
  }

  updateEmployee(employee: Employee) {
    return this.http.put<Employee>(this.baseUrl + 'employee/update-employee/', employee);
  }

  deleteEmployee(employeeid : number) {
    return this.http.delete<Employee>(this.baseUrl + 'employee/delete-employee/' + employeeid);
  }
}
