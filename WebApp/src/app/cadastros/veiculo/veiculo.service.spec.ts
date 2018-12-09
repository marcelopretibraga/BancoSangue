import { TestBed } from '@angular/core/testing';

import { VeiculoService } from './veiculo.service';

describe('VeiculoService', () => {
  beforeEach(() => TestBed.configureTestingModule({providers: [VeiculoService]}));

  it('should be created', () => {
    const service: VeiculoService = TestBed.get(VeiculoService);
    expect(service).toBeTruthy();
  });
});
