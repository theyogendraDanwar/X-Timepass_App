import { TestBed, inject } from '@angular/core/testing';

import { AutheticationService } from './authetication.service';

describe('AutheticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutheticationService]
    });
  });

  it('should be created', inject([AutheticationService], (service: AutheticationService) => {
    expect(service).toBeTruthy();
  }));
});
