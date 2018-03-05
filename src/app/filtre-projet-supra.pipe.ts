import { Pipe, PipeTransform } from '@angular/core';
import { Projet } from './projet';

@Pipe({
  name: 'filtre_projets_supra',
})
export class FiltreProjetsSupraPipe implements PipeTransform {
  public transform(projets: any[], input: string) {
    if (input) {
      input = input.toLowerCase();
      return projets.filter(function(projet: Projet) {
        return projet.ligne_produit
          && projet.ligne_produit.supra
          && projet.ligne_produit.supra.libelle
          && projet.ligne_produit.supra.libelle.toLowerCase().indexOf(input) > -1;
      });
    }
    return projets;
  }
}
