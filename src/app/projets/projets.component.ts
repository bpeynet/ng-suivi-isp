import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../http.service';
import { Projet } from '../projet';
import { Supra } from '../supra';
import { LigneProduit } from '../ligne-produit';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProjetComponent } from '../projet/projet.component';

@Component({
  selector: 'projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  public projets: Projet[];
  public supras: Supra[];
  public lignesproduit: Observable<LigneProduit[]>;

  constructor(
    public http: HttpService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    /*this.route.data
    .subscribe((data: { projets: Observable<Projet[]> }) => {
      this.projets = data.projets;
    });*/
    this.projets = this.route.snapshot.data.projets;
    //this.projets = this.http.get('projets?relations=ligne_produit.supra');
    this.http.get('supras?relations=lignes_produit')
      .subscribe((supras: Supra[]) => {
        this.supras = supras;
      });
    this.lignesproduit = this.http.get('lignes_produit?relations=supra');
  }

  edit(projet: Projet) {
    let dialog = this.dialog.open(ProjetComponent, {
      data: {
        projet: projet,
        supras: this.supras
      }
    });
  }

}
