import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-management',
  templateUrl: './doctor-management.component.html',
  styleUrls: ['./doctor-management.component.scss']
})
export class DoctorManagementComponent implements OnInit {
  doctors = [
    { name: 'Dr. Anu Seban', specialization: 'Smile Makeovers', contact: '9856734567', status: 'Active' },
    { name: 'Dr. Joemon KT', specialization: ' Dental Implants', contact: '5647364658', status: 'Active' },
  ];

  showForm = false;
  isEditing = false;
  doctorForm = { name: '', specialization: '', contact: '', status: 'Active' };
  editingIndex: number | null = null;

  constructor() {}

  ngOnInit(): void {}

  toggleForm() {
    this.showForm = !this.showForm;
    if (!this.showForm) this.resetForm();
  }

  saveDoctor() {
    if (this.isEditing && this.editingIndex !== null) {
      // Update existing doctor
      this.doctors[this.editingIndex] = { ...this.doctorForm };
    } else {
      // Add new doctor
      this.doctors.push({ ...this.doctorForm });
    }
    this.resetForm();
    this.showForm = false;
  }

  editDoctor(doctor: any) {
    this.doctorForm = { ...doctor };
    this.isEditing = true;
    this.editingIndex = this.doctors.indexOf(doctor);
    this.showForm = true;
  }

  deactivateDoctor(doctor: any) {
    doctor.status = 'Inactive';
  }

  resetForm() {
    this.doctorForm = { name: '', specialization: '', contact: '', status: 'Active' };
    this.isEditing = false;
    this.editingIndex = null;
  }
}
