import { TestBed, inject } from '@angular/core/testing';

import { SuprasResolverService } from './supras-resolver.service';

describe('SuprasResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuprasResolverService]
    });
  });

  it('should be created', inject([SuprasResolverService], (service: SuprasResolverService) => {
    expect(service).toBeTruthy();
  }));
});
