import { TestBed, inject } from '@angular/core/testing';

import { LuanaService } from './luana.service';

describe('LuanaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LuanaService]
    });
  });

  it('should be created', inject([LuanaService], (service: LuanaService) => {
    expect(service).toBeTruthy();
  }));
});
