import { TestBed } from '@angular/core/testing';

import { RedsocialService } from './redsocial.service';

describe('RedsocialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedsocialService = TestBed.get(RedsocialService);
    expect(service).toBeTruthy();
  });
});
