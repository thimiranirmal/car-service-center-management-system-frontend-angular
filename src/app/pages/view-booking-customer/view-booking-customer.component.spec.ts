import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookingCustomerComponent } from './view-booking-customer.component';

describe('ViewBookingCustomerComponent', () => {
  let component: ViewBookingCustomerComponent;
  let fixture: ComponentFixture<ViewBookingCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewBookingCustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewBookingCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
