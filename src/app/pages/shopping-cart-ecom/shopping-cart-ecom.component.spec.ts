import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartEcomComponent } from './shopping-cart-ecom.component';

describe('ShoppingCartEcomComponent', () => {
  let component: ShoppingCartEcomComponent;
  let fixture: ComponentFixture<ShoppingCartEcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartEcomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppingCartEcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
