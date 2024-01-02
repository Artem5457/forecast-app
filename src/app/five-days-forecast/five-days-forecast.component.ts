import { Component, Input } from '@angular/core';
import { getFiveDaysForecast } from '../store/selectors/forecast.selector';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Forecast } from '../shared/interfaces/forecast.interface';

interface DayForecast {
  min: Forecast;
  max: Forecast;
  curTemp: number;
}

@Component({
  selector: 'app-five-days-forecast',
  templateUrl: './five-days-forecast.component.html',
  styleUrls: ['./five-days-forecast.component.scss'],
})
export class FiveDaysForecastComponent {
  @Input() isCelsius: boolean;

  fiveDaysForecast$: Observable<DayForecast[]> = this.store.pipe(
    select(getFiveDaysForecast)
  );

  constructor(private store: Store) {}
}
