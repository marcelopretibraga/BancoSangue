import { TestBed, inject } from '@angular/core/testing';

import { CorService } from './cor.service';

describe('CorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CorService]
    });
  });

  it('should be created', inject([CorService], (service: CorService) => {
    expect(service).toBeTruthy();
  }));
});
