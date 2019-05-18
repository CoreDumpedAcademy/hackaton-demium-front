import { TestBed } from '@angular/core/testing';

import { TicketInfoService } from './ticket-info.service';

describe('TicketInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TicketInfoService = TestBed.get(TicketInfoService);
    expect(service).toBeTruthy();
  });
});
