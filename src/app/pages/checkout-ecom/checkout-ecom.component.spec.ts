import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutEcomComponent } from './checkout-ecom.component';

describe('CheckoutEcomComponent', () => {
  let component: CheckoutEcomComponent;
  let fixture: ComponentFixture<CheckoutEcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutEcomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckoutEcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
