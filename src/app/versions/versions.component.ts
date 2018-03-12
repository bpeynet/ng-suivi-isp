import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../http.service';
import { Version } from '../version';
import { Projet } from '../projet';
import { Jalon } from '../jalon';
import { TypeDeSuivi } from '../type-de-suivi';
import { Avancement } from '../avancement';

@Component({
  selector: 'versions',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.css']
})
export class VersionsComponent implements OnInit {

  public versions: Version[];
  public projets: Projet[];
  public jalons: Jalon[];
  public types_de_suivi: TypeDeSuivi[];
  public avancements: Avancement[];
  public CNIL: number = 0;
  public RGS: number = 0;
  public exigences_metier: number = 0;
  public etats_de_filtre: string[] = ["tous", "oui", "non"];

  constructor(public http: HttpService) { }

  ngOnInit() {
    this.http.get('versions?relations=projet,jalon,type_de_suivi,avancement').subscribe((versions: Version[]) => {
      this.versions = versions.sort(Version.tri);
    });
    this.http.get('projets').subscribe((projets: Projet[]) => {
      this.projets = projets.sort(Projet.triSelonCode);
    });
    this.http.get('jalons').subscribe((jalons: Jalon[]) => {
      this.jalons = jalons;
    });
    this.http.get('suivis').subscribe((types_de_suivi: TypeDeSuivi[]) => {
      this.types_de_suivi = types_de_suivi;
    });
    this.http.get('avancements').subscribe((avancements: Avancement[]) => {
      this.avancements = avancements;
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
