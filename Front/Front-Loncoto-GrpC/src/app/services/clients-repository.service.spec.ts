import { TestBed, inject } from '@angular/core/testing';

import { ClientsRepositoryService } from './clients-repository.service';

describe('ClientsRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientsRepositoryService]
    });
  });

  it('should be created', inject([ClientsRepositoryService], (service: ClientsRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
