import { Component, Input } from '@angular/core';
import { Forecast } from 'src/app/shared/interfaces/forecast.interface';

@Component({
  selector: 'app-forecast-date-info',
  templateUrl: './forecast-date-info.component.html',
  styleUrls: ['./forecast-date-info.component.scss']
})
export class ForecastDateInfoComponent {
  @Input() todayForecast: Forecast | null;

  get transformRotation(): string {
    return `rotate(${-90 + this.todayForecast?.wind.deg}deg)`
  }
}
