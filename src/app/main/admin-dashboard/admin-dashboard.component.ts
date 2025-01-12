import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  departments: any[] = [
    { id: '1', name: 'Cosmetic Dentistry', bookingCount: 10, bookings: [],doctor:'Anu Seban' },
    { id: '2', name: 'Orthodontics', bookingCount: 5, bookings: [],doctor:'Thomas Tom' },
    { id: '3', name: 'Endodontics', bookingCount: 8, bookings: [],doctor:'Joseph JJ' , },
    { id: '4', name: 'Preventive Dentistry', bookingCount: 12, bookings: [] ,doctor:' Seban KT' },
    { id: '5', name: 'Implants & Restorative Dentistry', bookingCount: 3, bookings: [],doctor:'Manu Aiban'  },
    { id: '6', name: 'Oral Surgery', bookingCount: 7, bookings: [],doctor:'Rani Paul'  },
    { id: '7', name: 'Pediatric Dentistry', bookingCount: 9, bookings: [],doctor:'Anand TY' }
  ];
  selectedDepartment: any;
  displayedColumns: string[] = ['id', 'customerName', 'doctorName', 'date'];

  constructor() {}

  ngOnInit(): void {
    // Ensure mock data is added
    this.departments.forEach((department: { bookings: { id: string; customerName: string; doctorName: string; date: Date; }[]; }) => {
      department.bookings = [
        { id: 'B101', customerName: 'George Ak', doctorName: 'Dr. Anu Seban', date: new Date() },
        { id: 'B102', customerName: 'Alin Mahesh', doctorName: 'Dr. Thomas Tom', date: new Date() },
        { id: 'B103', customerName: 'Karthika Ad', doctorName: 'Dr. Joseph JJ', date: new Date() },
        { id: 'B104', customerName: 'Sumesh Ba', doctorName: 'Dr. Seban KT', date: new Date() },
        { id: 'B105', customerName: 'Alin Mahesh', doctorName: 'Dr. Manu Aiban', date: new Date() },
        { id: 'B106', customerName: 'Karthika Ad', doctorName: 'Dr. Rani Paul', date: new Date() },
        { id: 'B107', customerName: 'Sumesh Ba', doctorName: 'Dr. Anand TY', date: new Date() }
      ];
    });
  
    console.log('Departments:', this.departments); // Check if the data is correctly populated
  }
  viewBookings(department: any): void {
    this.selectedDepartment = department;
  
    // Filter bookings based on the doctor
    this.selectedDepartment.bookings = department.bookings.filter(
      (booking: { doctorName: string; }) => booking.doctorName === 'Dr. ' + department.doctor
    );
  
    // Log the filtered bookings to check
    console.log('Filtered Bookings:', this.selectedDepartment.bookings);
  }
  

  exportToExcel(): void {
    if (!this.selectedDepartment?.bookings?.length) {
      alert('No bookings to export!');
      return;
    }

    const worksheetData = this.selectedDepartment.bookings.map((booking: any) => ({
      'Booking ID': booking.id,
      'Customer': booking.customerName,
      'Doctor': booking.doctorName,
      'Date': new Date(booking.date).toLocaleDateString()
    }));

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Bookings');
    XLSX.writeFile(workbook, `Bookings_${this.selectedDepartment.name}.xlsx`);
  }
}
