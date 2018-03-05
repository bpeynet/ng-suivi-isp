import { TestBed, inject } from '@angular/core/testing';

import { ProjetsResolverService } from './projets-resolver.service';

describe('ProjetsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjetsResolverService]
    });
  });

  it('should be created', inject([ProjetsResolverService], (service: ProjetsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
