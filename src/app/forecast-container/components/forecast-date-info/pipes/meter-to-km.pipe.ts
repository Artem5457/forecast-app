import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'meterToKm'
})
export class MeterToKmPipe implements PipeTransform {
  transform(meters: number): number {
    return (Math.round((meters / 1000) * 100)) / 100;
  }
}
