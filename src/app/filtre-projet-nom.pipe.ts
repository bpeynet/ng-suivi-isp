import { Pipe, PipeTransform } from '@angular/core';
import { Projet } from './projet';

@Pipe({
  name: 'filtre_projets_nom',
})
export class FiltreProjetsNomPipe implements PipeTransform {
  public transform(projets: any[], input: string) {
    if (input) {
      input = input.toLowerCase();
      return projets.filter(function(projet: Projet) {
        return projet.nom && projet.nom.toLowerCase().indexOf(input) > -1;
      });
    }
    return projets;
  }
}
