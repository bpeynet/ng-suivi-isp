import { Component, OnInit, Input } from '@angular/core';

import { HttpService } from '../http.service';
import { Supra } from '../supra';

@Component({
  selector: 'supra',
  templateUrl: './supra.component.html',
  styleUrls: ['./supra.component.css']
})
export class SupraComponent implements OnInit {

  private _supra: Supra;
  brouillon: Supra;

  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  @Input()
  set supra(supra: Supra) {
    if (supra) {
      this._supra = supra;
      this.brouillon = Object.assign({}, supra);
    }
  }

  enregistrer() {
    this.http.put('supras', this.brouillon).subscribe(
      () => {
        Object.assign(this._supra, this.brouillon);
      }
    );
  }

}
