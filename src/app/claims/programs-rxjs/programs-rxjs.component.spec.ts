import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsRxjsComponent } from './programs-rxjs.component';

describe('ProgramsRxjsComponent', () => {
  let component: ProgramsRxjsComponent;
  let fixture: ComponentFixture<ProgramsRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramsRxjsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramsRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
