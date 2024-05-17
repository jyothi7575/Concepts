import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExinjectableComponent } from './exinjectable.component';

describe('ExinjectableComponent', () => {
  let component: ExinjectableComponent;
  let fixture: ComponentFixture<ExinjectableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExinjectableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExinjectableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
