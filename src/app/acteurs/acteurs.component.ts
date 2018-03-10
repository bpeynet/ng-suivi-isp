import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import { Acteur } from '../acteur';

@Component({
  selector: 'acteurs',
  templateUrl: './acteurs.component.html',
  styleUrls: ['./acteurs.component.css']
})
export class ActeursComponent implements OnInit {

  public acteurs: Acteur[];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get('acteurs').subscribe(acteurs => {
      this.acteurs = acteurs;
    });
  }

}
