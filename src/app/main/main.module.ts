import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


import { MatDialogModule } from '@angular/material/dialog';


import { NgxPrintModule } from 'ngx-print';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input'; // For the search input
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component'; 



@NgModule({
  declarations: [
   
  
    HomeComponent,
           ServicesComponent,
           AboutComponent,
           InsuranceComponent,
           ContactComponent,
           BookingComponent,
           DoctorsComponent,
           AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    NgxPrintModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    NgxMaterialTimepickerModule
  ]
})
export class MainModule { }
