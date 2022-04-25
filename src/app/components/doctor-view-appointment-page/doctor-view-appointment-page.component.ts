import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAppointment } from 'src/app/Interfaces/IAppointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-doctor-view-appointment-page',
  templateUrl: './doctor-view-appointment-page.component.html',
  styleUrls: ['./doctor-view-appointment-page.component.css']
})
export class DoctorViewAppointmentPageComponent implements OnInit {

  appointments:Observable<IAppointment[]> = new Observable<IAppointment[]>();

  appointment:IAppointment = {
    appointmentId: 0,
    patient: 0,
    appointmentTime: 0,
    hospitalName: '',
    hospitalAddress: '',
    appointmentStatus: '',
    hospitalRating:0
  };

  viewAll(): void{
    this.appointmentService.getAll();
    this.appointments = this.appointmentService.allAppointments;
  }

  viewPending(){
    this.appointmentService.getPending();
    this.appointments = this.appointmentService.allAppointments;
  }

  viewServed(){
    this.appointmentService.getServed();
    this.appointments = this.appointmentService.allAppointments;
  }

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointmentService.getAll();
    this.appointments = this.appointmentService.allAppointments;
  }

}
