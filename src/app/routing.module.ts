import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProjetsComponent } from './projets/projets.component';
import { VersionsComponent } from './versions/versions.component';
import { ProjetComponent } from './projet/projet.component';
import { SuprasResolverService } from './supras-resolver.service';
import { ProjetsResolverService } from './projets-resolver.service';
import { SuprasComponent } from './supras/supras.component';
import { LignesProduitComponent } from './lignes-produit/lignes-produit.component';
import { ActeursComponent } from './acteurs/acteurs.component';

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'projets', component: ProjetsComponent, resolve: {projets  : ProjetsResolverService}},
  {path: 'projets/:id', component: ProjetComponent, resolve: SuprasResolverService},
  {path: 'versions', component: VersionsComponent},
  {path: 'acteurs', component: ActeursComponent},
  {path: 'lignesproduits', component: LignesProduitComponent},
  {path: 'supra', component: SuprasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
