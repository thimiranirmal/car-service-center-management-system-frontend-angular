import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewServiceListComponent } from './view-service-list.component';

describe('ViewServiceListComponent', () => {
  let component: ViewServiceListComponent;
  let fixture: ComponentFixture<ViewServiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewServiceListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
