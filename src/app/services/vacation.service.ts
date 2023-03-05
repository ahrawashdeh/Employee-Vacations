import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Vacation } from '../Models/Vacation';

@Injectable({
  providedIn: 'root'
})
export class VacationService {

  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAllVacations() {
    return this.http.get<Vacation[]>(this.baseUrl + 'vacations');
  }

  addVacation(vacation: Vacation) {
    return this.http.post<Vacation[]>(this.baseUrl + 'vacations/add-vacations', vacation);
  }

  updateVacation(vacation: Vacation) {
    return this.http.put<Vacation[]>(this.baseUrl + 'vacations/update-vacation', vacation);
  }

  deleteVacation(id: number) {
    return this.http.delete<Vacation[]>(this.baseUrl + 'vacations/delete-vacation' + '/' + id);
  }

}
