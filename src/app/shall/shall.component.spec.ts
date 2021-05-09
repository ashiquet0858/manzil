import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShallComponent } from './shall.component';

describe('ShallComponent', () => {
  let component: ShallComponent;
  let fixture: ComponentFixture<ShallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
