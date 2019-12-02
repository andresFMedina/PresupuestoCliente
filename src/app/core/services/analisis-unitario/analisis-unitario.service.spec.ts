import { TestBed } from '@angular/core/testing';

import { AnalisisUnitarioService } from './analisis-unitario.service';

describe('AnalisisUnitarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnalisisUnitarioService = TestBed.get(AnalisisUnitarioService);
    expect(service).toBeTruthy();
  });
});
