import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  ngOnInit(): void {
  }
  departments = [
    { id: '1', name: 'Cosmetic Dentistry', bookingCount: 10, bookings: [] },
    { id: '2', name: 'Orthodontics', bookingCount: 5, bookings: [] },
    { id: '3', name: 'Endodontics', bookingCount: 8, bookings: [] },
    { id: '4', name: 'Preventive Dentistry', bookingCount: 12, bookings: [] },
    { id: '5', name: 'Implants & Restorative Dentistry', bookingCount: 3, bookings: [] },
    { id: '6', name: 'Oral Surgery', bookingCount: 7, bookings: [] },
    { id: '7', name: 'Pediatric Dentistry', bookingCount: 9, bookings: [] }
  ];

  selectedDepartment: any;

  constructor() {
    
  }

  viewBookings(department: any): void {
    this.selectedDepartment = department;
  }
}
