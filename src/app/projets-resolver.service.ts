import { Injectable } from '@angular/core';
import {
  Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { HttpService } from './http.service';
import { Projet } from './projet';

@Injectable()
export class ProjetsResolverService implements Resolve<Projet[]> {

  constructor(private http: HttpService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Projet[]> {
    return this.http.get('projets?relations=ligne_produit.supra,ligne_produit.inge_secu');
  }
}
