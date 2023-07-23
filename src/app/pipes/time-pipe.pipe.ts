import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePipe',
})
export class TimePipePipe implements PipeTransform {
  transform(
    value: Date | string,
    format: string = 'dd/MM/yyyy HH:mm:ss'
  ): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };

    const date = typeof value === 'string' ? new Date(value) : value;
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
}
