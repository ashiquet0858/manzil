import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopesComponent } from './topes.component';

describe('TopesComponent', () => {
  let component: TopesComponent;
  let fixture: ComponentFixture<TopesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
