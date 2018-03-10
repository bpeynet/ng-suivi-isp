import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../http.service';
import { Version } from '../version';

@Component({
  selector: 'versions',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.css']
})
export class VersionsComponent implements OnInit {

  public versions: Version[];
  public CNIL: number = 0;
  public RGS: number = 0;
  public exigences_metier: number = 0;
  public etats_de_filtre: string[] = ["tous", "oui", "non"];

  constructor(public http: HttpService) { }

  ngOnInit() {
    this.http.get('versions?relations=projet,jalon,type_de_suivi,avancement').subscribe((versions: Version[]) => {
      this.versions = versions.sort((v1: Version, v2: Version) => {
        if (v1.projet.id > v2.projet.id) {
          return 1;
        } else if (v1.projet.id < v2.projet.id) {
          return -1;
        } else {
          return 0;
        }
      });
    });
  }

  CNILsuivant() {
    this.CNIL = (this.CNIL+1) %3;
  }

  RGSsuivant() {
    this.RGS = (this.RGS+1) %3;
  }

  ExigencesMetierSuivant() {
    this.exigences_metier = (this.exigences_metier+1) %3;
    console.log(this.exigences_metier);
  }

}
