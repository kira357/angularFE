import { TestBed } from '@angular/core/testing';

import { ServiceActionService } from './service-action.service';

describe('ServiceActionService', () => {
  let service: ServiceActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
