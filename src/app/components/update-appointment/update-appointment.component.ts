import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAppointment } from 'src/app/Interfaces/IAppointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent implements OnInit {

  appointment:IAppointment = {
    appointmentId: this.data.appointmentId,
    patient: this.data.patient,
    appointmentTime: this.data.appointmentTime,
    hospitalName: this.data.hospitalName,
    hospitalAddress: this.data.hospitalAddress,
    appointmentStatus: this.data.appointmentStatus
  }
  minDate: Date;
  maxDate: Date;

  updateAppointment(data:any):void {
    console.log("updateUser called");
    if(!this.confirmUpdate()){
      return;
    }
    console.log(data);
    this.appointment.appointmentTime = data.appointment;
    
    this.appointmentService.update(this.appointment)
    .subscribe(response=> {
      console.log(response);
    });
    alert("Your Appointment has been updated successfully");
    location.reload();
  }

  confirmUpdate(): boolean {
    if(window.confirm("Confirm Changes?")){
      return true;
    }else {
      return false;
    }
  }
  

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IAppointment,
    private appointmentService: AppointmentService) { 
      const today = new Date();
      const month = today.getMonth();
      const year = today.getFullYear();
      const day = today.getDate();

      this.minDate = today;
      //current date + number of days after to indicate valid range
      this.maxDate = new Date(year, month, day + 14);

    }

  ngOnInit(): void {
  }

}
