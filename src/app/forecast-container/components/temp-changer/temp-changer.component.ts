import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { isCelsius } from '../../../store/selectors/forecast.selector';
import {
  setCelsius,
  setFahrenheit,
} from '../../../store/actions/forecast-app.action';

@Component({
  selector: 'app-temp-changer',
  templateUrl: './temp-changer.component.html',
  styleUrls: ['./temp-changer.component.scss'],
})
export class TempChangerComponent {
  isCelsius$ = this.store.select(isCelsius);

  constructor(private store: Store) {}

  setCelsius(): void {
    this.store.dispatch(setCelsius());
  }

  setFahrenheit(): void {
    this.store.dispatch(setFahrenheit());
  }
}
