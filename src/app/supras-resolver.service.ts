import { Injectable } from '@angular/core';
import {
  Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { HttpService } from './http.service';
import { Supra } from './supra';

@Injectable()
export class SuprasResolverService implements Resolve<Supra[]> {

  constructor(private http: HttpService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Supra[]> {
    return this.http.get('supras?relations=ligne_produit');
  }
}
