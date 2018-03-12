import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  public transform(value: any, input: string) {
    if (input) {
      input = input.toLowerCase();
      return value.filter(function(element: any) {
        return (element.libelle && element.libelle.toLowerCase().indexOf(input) > -1)
          || (element.impacts && element.impacts.toLowerCase().indexOf(input) > -1)
          || (element.reference && element.reference.toLowerCase().indexOf(input) > -1)
          || (element.bienessentiel && element.bienessentiel.libelle.toLowerCase().indexOf(input) > -1)
          || (element.biensupport && element.biensupport.libelle.toLowerCase().indexOf(input) > -1)
          || (element.commentaires && element.commentaires.toLowerCase().indexOf(input) > -1)
          || (element.description && element.description.toLowerCase().indexOf(input) > -1);
      });
    }
    return value;
  }
}
