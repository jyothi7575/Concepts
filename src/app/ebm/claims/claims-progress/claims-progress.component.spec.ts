import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsProgressComponent } from './claims-progress.component';

describe('ClaimsProgressComponent', () => {
  let component: ClaimsProgressComponent;
  let fixture: ComponentFixture<ClaimsProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimsProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimsProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
