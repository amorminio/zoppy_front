import { TestBed } from '@angular/core/testing';

import { ApiZoppyService } from './api-zoppy.service';

describe('ApiZoppyService', () => {
  let service: ApiZoppyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiZoppyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
