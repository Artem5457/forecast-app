import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempValue'
})
export class TemperatureValuePipe implements PipeTransform {
  transform(temp: number, isCelsius: boolean): number {
    const celciusTemp = temp - 273;

    if (!isCelsius) {
      const farengTemp = Math.round(celciusTemp * 1.8 + 32);

      return farengTemp;
    }

    return celciusTemp;
  }
}
