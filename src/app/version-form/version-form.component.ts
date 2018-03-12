import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import { Projet } from '../projet';
import { Version } from '../version';
import { Jalon } from '../jalon';
import { TypeDeSuivi } from '../type-de-suivi';
import { Avancement } from '../avancement';

@Component({
  selector: 'version-form',
  templateUrl: './version-form.component.html',
  styleUrls: ['./version-form.component.css']
})
export class VersionFormComponent implements OnInit {

  public version: Version;
  public projets: Projet[];
  public jalons: Jalon[];
  public types_de_suivi: TypeDeSuivi[];
  public avancements: Avancement[];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.version = new Version();
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

  creer() {
    this.http.post('versions', this.version).subscribe(
      () => {
        this.version = new Version();
      }
    );
  }

}
