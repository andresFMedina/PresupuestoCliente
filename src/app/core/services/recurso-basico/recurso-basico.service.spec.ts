import { TestBed } from '@angular/core/testing';

import { RecursoBasicoService } from './recurso-basico.service';

describe('RecursoBasicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecursoBasicoService = TestBed.get(RecursoBasicoService);
    expect(service).toBeTruthy();
  });
});
