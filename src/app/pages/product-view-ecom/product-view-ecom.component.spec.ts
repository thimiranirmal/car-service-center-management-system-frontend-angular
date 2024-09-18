import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewEcomComponent } from './product-view-ecom.component';

describe('ProductViewEcomComponent', () => {
  let component: ProductViewEcomComponent;
  let fixture: ComponentFixture<ProductViewEcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductViewEcomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductViewEcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
