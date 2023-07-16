import {Component, Input} from '@angular/core';
import {Forecast} from "../shared/interfaces/forecast.interface";

@Component({
  selector: 'app-forecast-container',
  templateUrl: './forecast-container.component.html',
  styleUrls: ['./forecast-container.component.scss']
})
export class ForecastContainerComponent {
  @Input() isCelsius: boolean;
  @Input() todayForecast: Forecast | null;
}
