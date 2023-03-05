import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeService } from './services/employee.service';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { VacationsComponent } from './vacations/vacations.component';
import { EmployeeComponent } from './employee/employee.component';
import { VacationService } from './services/vacation.service';
import { DatePipe } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    VacationsComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'vacations', component: VacationsComponent},
      {path: 'employees', component: EmployeeComponent}
    ])
  ],
  providers: [
    EmployeeService,
    VacationService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
