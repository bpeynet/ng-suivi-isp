import { Pipe, PipeTransform } from '@angular/core';
import { Version } from './version';

@Pipe({
  name: 'filtre_versions_projets',
})
export class FiltreVersionsProjetsPipe implements PipeTransform {
  public transform(versions: Version[], ids: number[]) {
    if (ids && ids.length) {
      return versions.filter(function(version: Version) {
        return ids.indexOf(version.projet.id) != -1;
      });
    }
    return versions;
  }
}
