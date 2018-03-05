import { Injectable } from '@angular/core';
import {
  Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { HttpService } from './http.service';
import { Projet } from './projet';

@Injectable()
export class ProjetResolverService implements Resolve<Projet> {

  constructor(private http: HttpService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Projet> {
    let id: number = +route.paramMap.get('id');
    return this.http.get('projets', id);
  }
}
