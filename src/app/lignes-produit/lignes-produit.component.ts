import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import { LigneProduit } from '../ligne-produit';
import { Supra } from '../supra';

@Component({
  selector: 'lignes-produit',
  templateUrl: './lignes-produit.component.html',
  styleUrls: ['./lignes-produit.component.css']
})
export class LignesProduitComponent implements OnInit {

  supras: Supra[];
  selected: LigneProduit;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get('supras?relations=lignes_produit').subscribe(
      (supras: Supra[]) => {
        this.supras = supras;
      }
    );
  }

}
