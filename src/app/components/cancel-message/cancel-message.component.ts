import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAppointment } from 'src/app/Interfaces/IAppointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-cancel-message',
  templateUrl: './cancel-message.component.html',
  styleUrls: ['./cancel-message.component.css']
})
export class CancelMessageComponent implements OnInit {

  appointment:IAppointment = {
    appointmentId: this.data.appointmentId,
    patient: this.data.patient,
    appointmentTime: this.data.appointmentTime,
    hospitalName: this.data.hospitalName,
    hospitalAddress: this.data.hospitalAddress,
    appointmentStatus: this.data.appointmentStatus
  }

  cancelAppointment():void {
    this.appointment.appointmentStatus = "CANCELED";
    console.log(this.appointment);

    this.appointmentService.update(this.appointment)
    .subscribe(response => {
      console.log(response);
    });

    alert("Your appointment has been cancelled.");

    location.reload();
  }

  constructor( @Inject(MAT_DIALOG_DATA) public data: IAppointment, private appointmentService: AppointmentService) { }

  ngOnInit(): void {
  }

}
