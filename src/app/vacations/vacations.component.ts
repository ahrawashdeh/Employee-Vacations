import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Vacation } from '../Models/Vacation';
import { VacationService } from '../services/vacation.service';

@Component({
  selector: 'app-vacations',
  templateUrl: './vacations.component.html',
  styleUrls: ['./vacations.component.css']
})
export class VacationsComponent implements OnInit {

  vacations: Vacation[]= [];
  vacation: any = {}

  constructor(private vacService: VacationService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.getAllVacations();
  }

  getAllVacations() {
     this.vacService.getAllVacations().subscribe(response => {
      this.vacations = response
    })
  }

  addVacation() {
    this.vacService.addVacation(this.vacation).subscribe(response => {
      this.getAllVacations()
    })
  }

  updateVacation(vacation: Vacation) {
    this.vacService.updateVacation(vacation).subscribe(response => {
      this.getAllVacations()
    })
  }

  populateForm(vacation: Vacation) {
    this.vacation.id = vacation.id
    this.vacation.fromDate = this.datepipe.transform(new Date(vacation.fromDate), 'yyyy-MM-dd');
    this.vacation.toDate = this.datepipe.transform(new Date(vacation.toDate), 'yyyy-MM-dd')
    this.vacation.employeeId = vacation.employeeId
  }

  submitForm() {
    console.log(this.vacation)
    if (this.vacation.id === undefined) {
      this.addVacation()
    } else {
      this.updateVacation(this.vacation)
    }
  }

  deleteVacation(vacationId: number) {
    this.vacService.deleteVacation(vacationId).subscribe(response => {
      this.getAllVacations()
    })
  }

  log(x: any) {
    console.log(x.value.toDate < x.value.fromDate)
  }
}
