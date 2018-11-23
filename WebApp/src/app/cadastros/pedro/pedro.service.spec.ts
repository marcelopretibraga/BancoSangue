import { TestBed, inject } from '@angular/core/testing';

import { PedroService } from './pedro.service';

describe('PedroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PedroService]
    });
  });

  it('should be created', inject([PedroService], (service: PedroService) => {
    expect(service).toBeTruthy();
  }));
});
