import { Pipe, PipeTransform } from '@angular/core';
import { Projet } from './projet';

@Pipe({
  name: 'filtre_projets_ligneproduit',
})
export class FiltreProjetsLigneProduitPipe implements PipeTransform {
  public transform(projets: any[], input: string) {
    if (input) {
      input = input.toLowerCase();
      return projets.filter(function(projet: Projet) {
        return projet.ligne_produit
          && projet.ligne_produit.libelle
          && projet.ligne_produit.libelle.toLowerCase().indexOf(input) > -1;
      });
    }
    return projets;
  }
}
