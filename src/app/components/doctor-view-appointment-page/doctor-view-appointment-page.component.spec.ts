import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorViewAppointmentPageComponent } from './doctor-view-appointment-page.component';

describe('DoctorViewAppointmentPageComponent', () => {
  let component: DoctorViewAppointmentPageComponent;
  let fixture: ComponentFixture<DoctorViewAppointmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorViewAppointmentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorViewAppointmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
