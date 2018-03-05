import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { HttpService } from '../http.service';
import { Projet } from '../projet';
import { LigneProduit } from '../ligne-produit';
import { Supra } from '../supra';

@Component({
  selector: 'projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  public brouillon: Projet;

  public supras: Supra[];

  constructor(
    public http: HttpService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: ActivatedRoute,
    private matDialogRef: MatDialogRef<ProjetComponent>,
  ) { }

  ngOnInit() {
    this.brouillon = Object.assign({}, this.data.projet);
    if (!this.data.supras) {
      this.route.data.subscribe((data: { supras: Supra[]}) => {
        this.supras = data.supras;
      });
    } else {
      this.supras = this.data.supras;
    }
  }

  save() {
    this.http.put('projets', this.brouillon).subscribe(
      () => {
        Object.assign(this.data.projet, this.brouillon);
        this.matDialogRef.close();
      }
    )
  }

  annuler() {
    this.matDialogRef.close();
  }

  compareFn(l1: LigneProduit, l2: LigneProduit): boolean {
    return l1 && l2 ? l1.id === l2.id : l1 === l2;
  }

}
