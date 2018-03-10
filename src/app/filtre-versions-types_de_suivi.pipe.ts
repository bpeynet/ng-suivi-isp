import { Pipe, PipeTransform } from '@angular/core';
import { Version } from './version';

@Pipe({
  name: 'filtre_versions_types_de_suivi',
})
export class FiltreVersionsTypesDeSuiviPipe implements PipeTransform {
  public transform(versions: Version[], ids: number[]) {
    if (ids && ids.length) {
      return versions.filter(function(version: Version) {
        return ids.indexOf(version.type_de_suivi.id) != -1;
      });
    }
    return versions;
  }
}
