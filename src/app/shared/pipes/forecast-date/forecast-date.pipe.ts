import { Pipe, PipeTransform } from '@angular/core';
import { getDayOfWeek, getMonth } from "../../helpers/date.helper";

@Pipe({
  name: 'forecastDate'
})
export class ForecastDatePipe implements PipeTransform {
  transform(date: string): string {
    const day = new Date(date).getDay();
    const dayOfMonth = new Date(date).getDate();
    const month = new Date(date).getMonth();

    if (date) {
      return `${getDayOfWeek(day)}, ${dayOfMonth} ${getMonth(month)}`;
    }

    return 'Tomorrow';
  }
}
