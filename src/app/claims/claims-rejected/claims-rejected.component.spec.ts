import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsRejectedComponent } from './claims-rejected.component';

describe('ClaimsRejectedComponent', () => {
  let component: ClaimsRejectedComponent;
  let fixture: ComponentFixture<ClaimsRejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimsRejectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimsRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
