import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { IAppointment } from 'src/app/Interfaces/IAppointment';
import { IUser } from 'src/app/Interfaces/IUser';
import { CancelMessageComponent } from '../cancel-message/cancel-message.component';
import { UpdateAppointmentComponent } from '../update-appointment/update-appointment.component';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  @Input() user:IUser = {
    userId:0,
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    userType:"",
    phoneNumber:""
  }

  @Input() appointment:IAppointment = {
    appointmentId:0,
    patient:0,
    appointmentTime:0,
    hospitalName:"",
    hospitalAddress:"",
    appointmentStatus:""

  }

  constructor(public dialog:MatDialog, private cookieService:CookieService) { }


  confirmCancel(){
    this.dialog.open(CancelMessageComponent, {
      data: {
        appointmentId: this.appointment.appointmentId,
        patient: this.appointment.patient,
        appointmentTime: this.appointment.appointmentTime,
        hospitalName: this.appointment.hospitalName,
        hospitalAddress: this.appointment.hospitalAddress,
        appointmentStatus: this.appointment.appointmentStatus
      }
    });
  }


  confirmUpdate(){
    this.dialog.open(UpdateAppointmentComponent, {
      data: {
        appointmentId: this.appointment.appointmentId,
        patient: this.appointment.patient,
        appointmentTime: this.appointment.appointmentTime,
        hospitalName: this.appointment.hospitalName,
        hospitalAddress: this.appointment.hospitalAddress,
        appointmentStatus: this.appointment.appointmentStatus
      }
    });
  }

  ngOnInit(): void {
  }

}
