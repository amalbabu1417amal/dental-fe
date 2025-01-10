import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  selectedDepartment: any = '';
  selectedDoctor: any = '';
  selectedDate: any = '';
  selectedSlot: any;
  departments = [
    { id: '1', name: 'Cosmetic Dentistry' },
    { id: '2', name: 'Orthodontics' },
    { id: '3', name: 'Endodontics' },
    { id: '4', name: 'Preventive Dentistry' },
    { id: '5', name: 'Implants & Restorative Dentistry' },
    { id: '6', name: 'Oral Surgery' },
    { id: '7', name: 'Pediatric Dentistry' }
  ];
  doctors :any= [];
  availableDates :any= [];
  // availableDates: any[] = ['2025-01-09', '2025-01-10', '2025-01-11']; // Example dates
  availableSlots: { am: number[], pm: number[] } = { am: [], pm: [] };
  
  // selectedDate: any;
  isNewRegistration = false;
  isExistingUser = false;
  existingUser = false;

  salutation = '';
  fullName = '';
  gender = '';
  dob = '';
  mobile = '';
  email = '';
  city = '';
  pincode = '';
  existingMobile = '';
  existingFullName = '';
  existingEmail = '';

  constructor() { }

  ngOnInit(): void { }

  onDepartmentSelect() {
    if (this.selectedDepartment) {
      this.doctors = [
        { id: '1', name: 'Dr. John Doe', departmentId: this.selectedDepartment },
        { id: '2', name: 'Dr. Jane Smith', departmentId: this.selectedDepartment }
      ];
    }
  }

  onDoctorSelect() {
    // Example for available dates based on doctor selection
    if (this.selectedDoctor) {
      this.availableDates = ['2025-01-15', '2025-01-16', '2025-01-17'];
    }
  }


  
  onDateSelect() {
    // Logic to filter or update available slots based on the selected date
    console.log(this.selectedDate);
  }

  onSearch() {
    // Example slots data
    if (this.selectedDate) {
      this.availableSlots = {
        am: [9, 10, 11], // Example available slots in AM
        pm: [1, 2, 3]    // Example available slots in PM
      };
    }
  }

  showNewRegistration() {
    this.isNewRegistration = true;
    this.isExistingUser = false;
  }

  showExistingUser() {
    this.isNewRegistration = false;
    this.isExistingUser = true;
  }

  onSearchExistingUser() {
    if (this.existingMobile === '1234567890') {
      this.existingUser = true;
      this.existingFullName = 'John Doe';
      this.fullName=this.existingFullName
      this.existingEmail = 'john.doe@example.com';
    } else {
      alert('No user found with this mobile number!');
    }
  }

  onSubmit() {
    alert('Appointment booked successfully!');
  }
}
