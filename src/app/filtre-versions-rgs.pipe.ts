import { Pipe, PipeTransform } from '@angular/core';
import { Version } from './version';

@Pipe({
  name: 'filtre_versions_rgs',
})
export class FiltreVersionsRGSPipe implements PipeTransform {
  public transform(versions: Version[], input: number) {
    if (input) {
      if (input == 1) {
        return versions.filter(function(version: Version) {
          return version.homologation_RGS;
        });
      } else {
        return versions.filter(function(version: Version) {
          return !version.homologation_RGS;
        });
      }
    }
    return versions;
  }
}
