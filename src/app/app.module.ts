import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule } from '@angular/forms';

import { RoutingModule } from './routing.module';
import { AngularMaterialModule } from './angular-material.module';

import { AppComponent } from './app.component';

import { HttpService } from './http.service';

import { environment } from '../environments/environment';
import { ProjetsComponent } from './projets/projets.component';
import { AccueilComponent } from './accueil/accueil.component';
import { VersionsComponent } from './versions/versions.component';

import { FilterPipe } from './filtering.pipe';
import { FiltreProjetsNomPipe } from './filtre-projet-nom.pipe';
import { FiltreProjetsSupraPipe } from './filtre-projet-supra.pipe';
import { FiltreProjetsLigneProduitPipe } from './filtre-projet-ligneproduit.pipe';
import { toDatePipe } from './toDate.pipe';
import { ProjetComponent } from './projet/projet.component';
import { LignesProduitResolverService } from './lignes-produit-resolver.service';
import { SuprasResolverService } from './supras-resolver.service';
import { ProjetResolverService } from './projet-resolver.service';
import { ProjetsResolverService } from './projets-resolver.service';
import { SuprasComponent } from './supras/supras.component';
import { ActeursComponent } from './acteurs/acteurs.component';
import { LignesProduitComponent } from './lignes-produit/lignes-produit.component';
import { SupraComponent } from './supra/supra.component';
import { SupraFormComponent } from './supra-form/supra-form.component';
import { LigneProduitFormComponent } from './ligne-produit-form/ligne-produit-form.component';
import { LigneProduitComponent } from './ligne-produit/ligne-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetsComponent,
    AccueilComponent,
    VersionsComponent,
    FilterPipe,
    FiltreProjetsNomPipe,
    FiltreProjetsSupraPipe,
    FiltreProjetsLigneProduitPipe,
    toDatePipe,
    ProjetComponent,
    SuprasComponent,
    ActeursComponent,
    LignesProduitComponent,
    SupraComponent,
    SupraFormComponent,
    LigneProduitFormComponent,
    LigneProduitComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AngularMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  entryComponents: [
    ProjetComponent,
  ],
  providers: [HttpService, LignesProduitResolverService, SuprasResolverService, ProjetResolverService, ProjetsResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
