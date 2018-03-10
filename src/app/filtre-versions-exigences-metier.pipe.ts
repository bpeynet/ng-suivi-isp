import { Pipe, PipeTransform } from '@angular/core';
import { Version } from './version';

@Pipe({
  name: 'filtre_versions_exigences_metier',
})
export class FiltreVersionsExigencesMetierPipe implements PipeTransform {
  public transform(versions: Version[], input: number) {
    if (input) {
      if (input == 1) {
        return versions.filter(function(version: Version) {
          return version.exigences_metier == true;
        });
      } else {
        return versions.filter(function(version: Version) {
          return version.exigences_metier == false;
        });
      }
    }
    return versions;
  }
}
