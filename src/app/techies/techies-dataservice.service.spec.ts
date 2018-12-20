import { TestBed } from '@angular/core/testing';

import { TechiesDataserviceService } from './techies-dataservice.service';

describe('TechiesDataserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TechiesDataserviceService = TestBed.get(TechiesDataserviceService);
    expect(service).toBeTruthy();
  });
});
