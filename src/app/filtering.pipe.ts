import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  public transform(value: any[], input: string, champ: string) {
    if (input && champ) {
      input = input.toLowerCase();
      return value.filter(function(element: any) {
        return element[champ] && element[champ].toLowerCase().indexOf(input) > -1;
      });
    }
    return value;
  }
}
