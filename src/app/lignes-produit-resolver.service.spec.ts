import { TestBed, inject } from '@angular/core/testing';

import { LignesProduitResolverService } from './lignes-produit-resolver.service';

describe('LignesProduitResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LignesProduitResolverService]
    });
  });

  it('should be created', inject([LignesProduitResolverService], (service: LignesProduitResolverService) => {
    expect(service).toBeTruthy();
  }));
});
