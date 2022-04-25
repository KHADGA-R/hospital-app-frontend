import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatExpansionModule} from '@angular/material/expansion';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewallComponent } from './components/viewall/viewall.component';
import { RatingComponent } from './components/rating/rating.component';
import { AppointmentPageComponent } from './components/appointment-page/appointment-page.component';
import { LoginComponent } from './components/login/login.component';
import { DoctorViewAppointmentPageComponent } from './components/doctor-view-appointment-page/doctor-view-appointment-page.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { CancelMessageComponent } from './components/cancel-message/cancel-message.component';
import { UpdateAppointmentComponent } from './components/update-appointment/update-appointment.component';



@NgModule({
  declarations: [
    AppComponent,
    ViewallComponent,
    RatingComponent,
    AppointmentPageComponent,
    LoginComponent,
    DoctorViewAppointmentPageComponent,
    AppointmentComponent,
    CancelMessageComponent,
    UpdateAppointmentComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatExpansionModule
    
   
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
