import { TestBed } from '@angular/core/testing';

import { SeriviceService } from './serivice.service';

describe('SeriviceService', () => {
  let service: SeriviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
