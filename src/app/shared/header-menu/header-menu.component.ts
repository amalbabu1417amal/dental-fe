import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
// import { PasswordChangeComponent } from 'src/app/main/password-change/password-change.component';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
  constructor(private router: Router, private dialog: MatDialog) { }
  ngOnInit(): void {}
  isServicesDropdownOpen = false;
  isDoctorDropdownOpen = false;
  isHospitalDropdownOpen = false;

  // Function to toggle the dropdowns
  toggleDropdown(dropdown: string): void {
    if (dropdown === 'services') {
      this.isServicesDropdownOpen = !this.isServicesDropdownOpen;
      this.isDoctorDropdownOpen = false; // Close other dropdowns
      this.isHospitalDropdownOpen = false; // Close other dropdowns
    } else if (dropdown === 'doctor') {
      this.isDoctorDropdownOpen = !this.isDoctorDropdownOpen;
      this.isServicesDropdownOpen = false; // Close other dropdowns
      this.isHospitalDropdownOpen = false; // Close other dropdowns
    } else if (dropdown === 'hospital') {
      this.isHospitalDropdownOpen = !this.isHospitalDropdownOpen;
      this.isServicesDropdownOpen = false; // Close other dropdowns
      this.isDoctorDropdownOpen = false; // Close other dropdowns
    }
  }

  // Method to handle language change
  setLanguage(language: string): void {
    console.log('Selected Language:', language);
    // You can implement actual language switching logic here
    // For example, you might store the language in a service or localStorage
  }


}

