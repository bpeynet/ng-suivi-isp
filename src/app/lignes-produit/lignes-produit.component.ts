import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import { LigneProduit } from '../ligne-produit';
import { Supra } from '../supra';
import { Acteur } from '../acteur';

@Component({
  selector: 'lignes-produit',
  templateUrl: './lignes-produit.component.html',
  styleUrls: ['./lignes-produit.component.css']
})
export class LignesProduitComponent implements OnInit {

  public supras: Supra[];
  public selected: LigneProduit;
  public inges_secu: Acteur[];
  public rsis_fab: Acteur[];
  public architectes: Acteur[];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get('supras?relations=lignes_produit.inges_secu,lignes_produit.architectes,lignes_produit.rsis_fab').subscribe(
      (supras: Supra[]) => {
        this.supras = supras;
        this.supras.map(s => {
          s.lignes_produit.sort(LigneProduit.sort);
        });
      }
    );

    this.http.get('acteurs').subscribe((acteurs: Acteur[]) => {
      this.inges_secu = acteurs.filter(a => a.est_ingenieur_secu);
      this.rsis_fab = acteurs.filter(a => a.est_rsi_fab);
      this.architectes = acteurs.filter(a => a.est_architecte);
    });
  }

}
