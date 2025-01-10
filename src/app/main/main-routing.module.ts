import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { ServicesComponent } from './services/services.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { AboutComponent } from './about/about.component';
import { DoctorsComponent } from './doctors/doctors.component';


const routes: Routes = [
  {
    path:"",
    component:MainComponent,
    children:[{
      path:"contact",
      component:ContactComponent
    },
    {
      path:"home",
      component:HomeComponent
    },
    {
      path:"booking",
      component:BookingComponent
    },
    {
      path:"service",
      component:ServicesComponent
    },
    {
      path:"doctors",
      component:DoctorsComponent
    },
    {
      path:"about",
      component:AboutComponent
    },

    
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
