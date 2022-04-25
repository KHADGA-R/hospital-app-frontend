import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { IAppointment } from 'src/app/Interfaces/IAppointment';
import { AppointmentService } from 'src/app/services/appointment.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'appointment-page',
  templateUrl: './appointment-page.component.html',
  styleUrls: ['./appointment-page.component.css']
})
export class AppointmentPageComponent implements OnInit {

  appointment : IAppointment = {
    appointmentId: 0,
    patient: 0,
    appointmentTime: 0,
    hospitalName: '',
    hospitalAddress: '',
    appointmentStatus: 'PENDING',
    hospitalRating: 0
  };

  hospitalName : string = "";
  appointmentTime! : Date;
  hospitalAddress : string = "";


  @Inject(MAT_DIALOG_DATA) public info: any;
  

  constructor(private formBuilder:FormBuilder,
    private appointmentService: AppointmentService,
    private cookieService : CookieService) { }

  ngOnInit(): void {
    this.hospitalName = this.hospitalName;
    this.hospitalAddress = this.hospitalAddress;

  }

  confirmAppointment():boolean{
    if(window.confirm("Confirm Changes ?")){
      return true;
    }else {
      return false;
    }
  }

  onSubmit(data:any){
    console.log(data);
    if(!this.confirmAppointment()){
      return;
    }
    var userIdNumber = parseInt(this.cookieService.get('userId'));

    this.appointment.patient = userIdNumber;
    this.appointment.hospitalName = data.hospitalName;
    this.appointment.appointmentTime = data.appointmentTime;
    this.appointment.hospitalAddress = data.hospitalAddress;

    this.appointmentService.create(this.appointment).subscribe(Response => {
      console.log(Response)

    })
    alert("Your appointment has been made.");

    location.reload();
  }

}

