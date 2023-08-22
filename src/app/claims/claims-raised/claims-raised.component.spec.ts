import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsRaisedComponent } from './claims-raised.component';

describe('ClaimsRaisedComponent', () => {
  let component: ClaimsRaisedComponent;
  let fixture: ComponentFixture<ClaimsRaisedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimsRaisedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimsRaisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
