import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelMessageComponent } from './cancel-message.component';

describe('CancelMessageComponent', () => {
  let component: CancelMessageComponent;
  let fixture: ComponentFixture<CancelMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
