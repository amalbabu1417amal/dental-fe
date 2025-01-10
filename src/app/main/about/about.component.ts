import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  team = [
    { 
      name: 'Dr. Alex George', 
      role: 'Chief Dentist', 
      bio: 'Dr. Alex has over 15 years of experience in providing exceptional dental care.',
      image: "../../../assets/img/male1.jpg" 
    },
    { 
      name: 'Dr. Anu Robert', 
      role: 'Orthodontist', 
      bio: 'Dr. Anu  specializes in braces and dental alignment solutions.',
      image: "../../../assets/img/female.jpg" 
    },
    { 
      name: 'Dr. Anjali D', 
      role: 'Orthodontist', 
      bio: 'Dr. Anjali specializes in braces and dental alignment solutions.',
      image: "../../../assets/img/female2.jpg"
    },

  ];

  services = [
    {
      name: 'General Dentistry',
      description: 'Routine checkups and cleanings to maintain your oral health.',
      image: "../../../assets/img/cleaning.jpg"
    },
    {
      name: 'Cosmetic Dentistry',
      description: 'Enhance the appearance of your smile with veneers, whitening, and more.',
      image: "../../../assets/img/tethbraces.jpg"
    },
    {
      name: 'Orthodontics',
      description: 'Braces and aligners to straighten your teeth and improve your smile.',
      image: "../../../assets/img/implaints.jpg" 
    },
    {
      name: 'Cosmetic Dentistry',
      description: 'Enhance the appearance of your smile with veneers, whitening, and more.',
      image: "../../../assets/img/tethbraces.jpg"
    },
    {
      name: 'Orthodontics',
      description: 'Braces and aligners to straighten your teeth and improve your smile.',
      image: "../../../assets/img/implaints.jpg" 
    },
  ];
}
