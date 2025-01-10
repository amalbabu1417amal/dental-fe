import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './home-main/home-main.component';
import { HomeComponent } from './main/home/home.component';

const routes: Routes = [
  {
    path:"",
    component:HomeMainComponent,
  },
  {
    path:"main",
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
