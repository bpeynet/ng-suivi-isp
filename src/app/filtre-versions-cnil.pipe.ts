import { Pipe, PipeTransform } from '@angular/core';
import { Version } from './version';

@Pipe({
  name: 'filtre_versions_cnil',
})
export class FiltreVersionsCNILPipe implements PipeTransform {
  public transform(versions: Version[], input: number) {
    if (input) {
      if (input == 1) {
        return versions.filter(function(version: Version) {
          return version.CNIL;
        });
      } else {
        return versions.filter(function(version: Version) {
          return !version.CNIL;
        });
      }
    }
    return versions;
  }
}
