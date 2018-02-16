import { TestBed, inject } from '@angular/core/testing';

import { Getlist.ServiceService } from './getlist.service.service';

describe('Getlist.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Getlist.ServiceService]
    });
  });

  it('should be created', inject([Getlist.ServiceService], (service: Getlist.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
