import { TestBed } from '@angular/core/testing';

import { ConvertTimeService } from './convert-time.service';

describe('ConvertTimeService', () => {
  let service: ConvertTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
