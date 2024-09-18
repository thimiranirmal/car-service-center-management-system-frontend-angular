import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListEcomComponent } from './products-list-ecom.component';

describe('ProductsListEcomComponent', () => {
  let component: ProductsListEcomComponent;
  let fixture: ComponentFixture<ProductsListEcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsListEcomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsListEcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
