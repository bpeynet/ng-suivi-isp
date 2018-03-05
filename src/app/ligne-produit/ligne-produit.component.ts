import { Component, OnInit, Input } from '@angular/core';

import { HttpService } from '../http.service';
import { LigneProduit } from '../ligne-produit';
import { Supra } from '../supra';

@Component({
  selector: 'ligne-produit',
  templateUrl: './ligne-produit.component.html',
  styleUrls: ['./ligne-produit.component.css']
})
export class LigneProduitComponent implements OnInit {

  private _ligne_produit: LigneProduit;
  public brouillon: LigneProduit;
  public _supras: Supra[];
  public _supras_simples: Supra[];

  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  @Input()
  set ligne_produit(ligne_produit: LigneProduit) {
    if (ligne_produit) {
      this._ligne_produit = ligne_produit;
      if (!this._ligne_produit.supra) {
        this._ligne_produit.supra = new Supra();
        this._ligne_produit.supra.id = this._ligne_produit.id_supra;
      }
      this.brouillon = Object.assign({}, this._ligne_produit);
    }
  }

  @Input()
  set supras(supras: Supra[]) {
    if (supras) {
      this._supras = supras;
      /*  Un autre tableau de supras est nécessaire pour avoir les supras sans leurs lignes produit
          autrement, une erreur d'object cyclique est causée lors de http.put (objet stringified) */
      this._supras_simples = supras.map(supra => {
        let s = new Supra();
        s.id = supra.id;
        s.libelle = supra.libelle;
        return s;
      });
    }
  }

  enregistrer() {
    this.http.put('lignes_produit', this.brouillon).subscribe(
      () => {
        if (this.brouillon.supra.id != this._ligne_produit.supra.id) {
          let old_supra = this._supras.find(s => s.id === this._ligne_produit.supra.id);
          let index = old_supra.lignes_produit.findIndex(l => l==this._ligne_produit);
          old_supra.lignes_produit.splice(index, 1);
          let lignes_produits = this._supras.find(s => s.id === this.brouillon.supra.id).lignes_produit;
          lignes_produits.push(this._ligne_produit);
          lignes_produits.sort(LigneProduit.sort)
        }
        Object.assign(this._ligne_produit, this.brouillon);
      }
    );
  }

  compareFn(s1: Supra, s2: Supra): boolean {
    return s1 && s2 ? s1.id === s2.id : s1 === s2;
  }

}
