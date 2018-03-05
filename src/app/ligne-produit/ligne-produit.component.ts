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
  brouillon: LigneProduit;
  @Input() public supras: Supra[];

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

  enregistrer() {
    this.brouillon.supra.lignes_produit = undefined;
    this.http.put('lignes_produit', this.brouillon).subscribe(
      () => {
        if (this.brouillon.supra.id != this._ligne_produit.supra.id) {
          console.log('changement');
          let old_supra = this.supras.find(s => s.id === this._ligne_produit.supra.id);
          let index = old_supra.lignes_produit.findIndex(l => l==this._ligne_produit);
          old_supra.lignes_produit.slice(index, 1);
          this.supras.find(s => s.id === this.brouillon.supra.id).lignes_produit.push(this._ligne_produit);
        }
        Object.assign(this._ligne_produit, this.brouillon);
      }
    );
  }

  compareFn(s1: Supra, s2: Supra): boolean {
    return s1 && s2 ? s1.id === s2.id : s1 === s2;
  }

}
