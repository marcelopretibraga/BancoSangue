import { TestBed, inject } from '@angular/core/testing';

import { MatheusService } from './matheus.service';

describe('MatheusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatheusService]
    });
  });

  it('should be created', inject([MatheusService], (service: MatheusService) => {
    expect(service).toBeTruthy();
  }));
});
