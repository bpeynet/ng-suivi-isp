import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import { LigneProduit } from '../ligne-produit';
import { Supra } from '../supra';
import { Projet } from '../projet';

@Component({
  selector: 'projet-form',
  templateUrl: './projet-form.component.html',
  styleUrls: ['./projet-form.component.css']
})
export class ProjetFormComponent implements OnInit {

  public projet: Projet;
  public supras: Supra[];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.projet = new Projet();
    this.http.get('supras?relations=lignes_produit')
      .subscribe((supras: Supra[]) => {
        this.supras = supras;
      });
  }

  creer() {
    this.http.post('projets', this.projet).subscribe(
      () => {
        this.projet = new Projet();
      }
    );
  }

}
