import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public sidenavWidth: number;
  public reduit: boolean;
  public projetForm: boolean;
  public versionForm: boolean;

  @ViewChild('tiroirDeDroite') tiroirDeDroite: MatSidenav;

  ouvre(){
    this.reduit = false;
    //this.sidenavWidth = 15;
  }

  ferme(){
    this.reduit = true;
    //this.sidenavWidth = 4;
  }

  ouvrirProjetForm() {
    this.tiroirDeDroite.open();
    this.projetForm = true;
    this.versionForm = false;
  }

  ouvrirVersionForm() {
    this.tiroirDeDroite.open();
    this.versionForm = true;
    this.projetForm = false;
  }
}
