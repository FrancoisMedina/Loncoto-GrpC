import { TestBed, inject } from '@angular/core/testing';

import { GroupsRepositoryService } from './groups-repository.service';

describe('GroupsRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupsRepositoryService]
    });
  });

  it('should be created', inject([GroupsRepositoryService], (service: GroupsRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
