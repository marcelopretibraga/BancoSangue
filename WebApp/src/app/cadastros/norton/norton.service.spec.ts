import { TestBed, inject } from '@angular/core/testing';

import { NortonService } from './norton.service';

describe('NortonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NortonService]
    });
  });

  it('should be created', inject([NortonService], (service: NortonService) => {
    expect(service).toBeTruthy();
  }));
});
