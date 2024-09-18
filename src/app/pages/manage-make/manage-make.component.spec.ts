import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMakeComponent } from './manage-make.component';

describe('ManageMakeComponent', () => {
  let component: ManageMakeComponent;
  let fixture: ComponentFixture<ManageMakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageMakeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageMakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
