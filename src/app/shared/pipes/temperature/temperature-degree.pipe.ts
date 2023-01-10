import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempDegree'
})
export class TemperatureDegreePipe implements PipeTransform {
  transform(isCelsius: boolean): string {
    return isCelsius ? '°C' : '°F';
  }
}
