import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { IAppointment } from '../Interfaces/IAppointment';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private url = "http://localhost:8080/appointments";

  appointments:IAppointment[] = [];
  allAppointments:Subject<IAppointment[]> = new Subject<IAppointment[]>();
  userAppointments:Subject<IAppointment[]> = new Subject<IAppointment[]>();


  create(appointments:IAppointment):Observable<IAppointment>{
    return this.http.post<IAppointment>(`${this.url}/`, appointments)
    .pipe(catchError((e) => {
      return throwError(e);
    }));
  }

  
  appointmentPending(id:number):void {
    this.http.get<IAppointment[]>(`${this.url}/patient/pending/${id}`)
    .pipe(catchError((e)=>{
      return throwError(e);
    })
    ).subscribe((data)=>{
      this.appointments = data;
      this.userAppointments.next(this.appointments)
    });
  }
  

  patientServed(id:number): void {
    this.http.get<IAppointment[]>(`${this.url}/patient/served/${id}`)
    .pipe(catchError((e)=>{
      return throwError(e);
    })
    ).subscribe((data)=>{
      this.appointments = data;
      this.userAppointments.next(this.appointments)
    });
  }

  patientAppointment(id:number):void {
    this.http.get<IAppointment[]>(`${this.url}/patient/${id}`)
    .pipe(catchError((e) => {
      return throwError(e);
    })
    ).subscribe((data) =>{
      this.appointments = data;
      this.userAppointments.next(this.appointments)
    });
  }

  getAll(): void {
    this.http.get<IAppointment[]>(`${this.url}/`)
    .pipe(catchError((e) => {
      return throwError(e);
    })
    ).subscribe((data) => {
      this.appointments = data;
      this.userAppointments.next(this.appointments)
    });
  }

  getPending(): void {
    this.http.get<IAppointment[]>(`${this.url}/pending`)
    .pipe(catchError((e)=>{
      return throwError(e);
    })
    ).subscribe((data)=>{
      this.appointments = data;
      this.allAppointments.next(this.appointments)
    });
  }

  getServed(): void {
    this.http.get<IAppointment[]>(`${this.url}/served`)
    .pipe(catchError((e)=>{
      return throwError(e);
    })
    ).subscribe((data)=>{
      this.appointments = data;
      this.allAppointments.next(this.appointments)
    });
  }

  update(appointment:IAppointment):Observable<IAppointment>{
    console.log("update appointment called");
    return this.http.put<IAppointment>(`${this.url}/`, appointment)
    .pipe(catchError((e)=>{
      console.log(e)
      return throwError(e);
    }));
  }


  constructor(private http:HttpClient) { }
}
