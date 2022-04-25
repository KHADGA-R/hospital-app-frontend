import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentPageComponent } from './components/appointment-page/appointment-page.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'appointment-page', component:AppointmentPageComponent},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
