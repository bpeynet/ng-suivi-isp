import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class HttpService {

  private apiURL: string = environment.apiHost + '/' + environment.apiPath;

  constructor(private http: HttpClient) { }

  public get(path: string, id?: number): Observable<any> {
    let url = this.apiURL + '/' + path;
    if (id) {
      url += '/' + id;
    }
    return this.http.get(url);
  }

  public put(path: string, element: any): Observable<any> {
    let url = this.apiURL + '/' + path;
    if (!element.id) {
      throw new Error("La mise à jour requiert un id.");
    } else {
      url += '/' + element.id;
    }
    return this.http.put(url, element);
  }

  public post(path: string, element: any): Observable<any> {
    let url = this.apiURL + '/' + path;
    return this.http.post(url, element);
  }
}
