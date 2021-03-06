import { Component, OnInit, Input } from '@angular/core';

import { HttpService } from '../http.service';
import { LigneProduit } from '../ligne-produit';
import { Supra } from '../supra';
import { Acteur } from '../acteur';

@Component({
  selector: 'ligne-produit-form',
  templateUrl: './ligne-produit-form.component.html',
  styleUrls: ['./ligne-produit-form.component.css']
})
export class LigneProduitFormComponent implements OnInit {

  ligne_produit: LigneProduit;
  @Input() supras: Supra[];
  @Input() public inges_secu: Acteur[];
  @Input() public rsis_fab: Acteur[];
  @Input() public architectes: Acteur[];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.ligne_produit = new LigneProduit();
  }

  creer() {
    this.http.post('lignes_produit', this.ligne_produit).subscribe(
      () => {
        this.supras.find(s => s.id == this.ligne_produit.supra.id).lignes_produit.push(this.ligne_produit);
        this.ligne_produit = new LigneProduit();
      });
  }

}
