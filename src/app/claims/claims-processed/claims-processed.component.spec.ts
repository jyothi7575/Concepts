import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsProcessedComponent } from './ClaimsProcessedComponent';

describe('ClaimsProcessedComponent', () => {
  let component: ClaimsProcessedComponent;
  let fixture: ComponentFixture<ClaimsProcessedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimsProcessedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimsProcessedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
