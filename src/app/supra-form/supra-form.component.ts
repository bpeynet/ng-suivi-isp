import { Component, OnInit, Input } from '@angular/core';

import { HttpService } from '../http.service';
import { Supra } from '../supra';

@Component({
  selector: 'supra-form',
  templateUrl: './supra-form.component.html',
  styleUrls: ['./supra-form.component.css']
})
export class SupraFormComponent implements OnInit {

  supra: Supra;
  @Input() supras: Supra[];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.supra = new Supra();
  }

  creer() {
    this.http.post('supras', this.supra).subscribe(
      () => {
        this.supras.push(this.supra);
        this.supra = new Supra();
      });
  }

}
