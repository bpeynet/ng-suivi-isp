import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import { Supra } from '../supra';

@Component({
  selector: 'supras',
  templateUrl: './supras.component.html',
  styleUrls: ['./supras.component.css']
})
export class SuprasComponent implements OnInit {

  supras: Supra[];
  selected: Supra;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get('supras').subscribe(
      (supras: Supra[]) => {
        this.supras = supras;
      }
    );
  }

  select(supra: Supra) {
    this.selected = supra;
  }

}
