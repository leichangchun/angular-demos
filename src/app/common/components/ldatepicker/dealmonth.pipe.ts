import { Pipe, PipeTransform } from '@angular/core';

const Month = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];

@Pipe({
  name: 'dealmonth'
})
export class DealmonthPipe implements PipeTransform {

  transform(value: any): any {
    return Month[value];
  }
}
