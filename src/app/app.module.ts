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


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewallComponent } from './components/viewall/viewall.component';
import { RatingComponent } from './components/rating/rating.component';
import { AppointmentPageComponent } from './components/appointment-page/appointment-page.component';



@NgModule({
  declarations: [
    AppComponent,
    ViewallComponent,
    RatingComponent,
    AppointmentPageComponent
   
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
    FlexLayoutModule
    
   
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
