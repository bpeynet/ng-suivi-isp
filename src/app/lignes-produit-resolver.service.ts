import { Injectable } from '@angular/core';
import {
  Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { HttpService } from './http.service';
import { LigneProduit } from './ligne-produit';

@Injectable()
export class LignesProduitResolverService implements Resolve<LigneProduit[]> {

  constructor(private http: HttpService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LigneProduit[]> {
    return this.http.get('lignes_produit?relations=supra');
  }
}
