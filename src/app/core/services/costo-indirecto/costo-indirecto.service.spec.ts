import { TestBed } from '@angular/core/testing';

import { CostoIndirectoService } from './costo-indirecto.service';

describe('CostoIndirectoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CostoIndirectoService = TestBed.get(CostoIndirectoService);
    expect(service).toBeTruthy();
  });
});
