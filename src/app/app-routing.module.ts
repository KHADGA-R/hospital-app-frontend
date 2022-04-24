import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentPageComponent } from './components/appointment-page/appointment-page.component';

const routes: Routes = [
  //{path: 'appointment-page', component:AppointmentPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
