import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Models/Employee';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // employees$ : Observable<Employee[]> | undefined;
  model: any[] = []
  p: number = 1;
  vacation: any[] = []

  constructor(private empService: EmployeeService, private http: HttpClient) { }

  ngOnInit(): void {
    this.empService.getEmployeeVacations().subscribe(model => {
      this.model = model
    });

    this.getVacation();
  }

  getVacation() {
     this.http.get<any[]>('https://localhost:6001/api/vacations/vacationsEmp').subscribe(response => {
      this.vacation = response
    })
  }

}
