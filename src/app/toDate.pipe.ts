import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toDate',
})
export class toDatePipe implements PipeTransform {
  public transform(value: string) {
    if (value) {
      let tmp = new Date(value);
      return tmp.toLocaleDateString();
    }
    return value;
  }
}
