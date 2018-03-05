import { TestBed, inject } from '@angular/core/testing';

import { ProjetResolverService } from './projet-resolver.service';

describe('ProjetResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjetResolverService]
    });
  });

  it('should be created', inject([ProjetResolverService], (service: ProjetResolverService) => {
    expect(service).toBeTruthy();
  }));
});
