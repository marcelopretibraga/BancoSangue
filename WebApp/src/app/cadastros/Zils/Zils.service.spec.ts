import { TestBed, inject } from '@angular/core/testing';

import { ZilsService } from './zils.service';

describe('ZilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZilsService]
    });
  });

  it('should be created', inject([ZilsService], (service: ZilsService) => {
    expect(service).toBeTruthy();
  }));
});
