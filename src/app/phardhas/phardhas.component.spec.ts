import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhardhasComponent } from './phardhas.component';

describe('PhardhasComponent', () => {
  let component: PhardhasComponent;
  let fixture: ComponentFixture<PhardhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhardhasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhardhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
