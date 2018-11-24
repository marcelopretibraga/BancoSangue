import { TestBed, inject } from '@angular/core/testing';

import { FelipeService } from './felipe.service';

describe('FelipeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FelipeService]
    });
  });

  it('should be created', inject([FelipeService], (service: FelipeService) => {
    expect(service).toBeTruthy();
  }));
});
