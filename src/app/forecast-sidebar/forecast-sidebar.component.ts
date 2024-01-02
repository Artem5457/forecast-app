import { Component, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Forecast } from '../shared/interfaces/forecast.interface';
import { TemperatureValuePipe } from "../shared/pipes/temperature/temperature-value.pipe";
import { getCurrentDate } from "../shared/helpers/date.helper";
import { getCurrentCity, getCurrentLocation, isCoordsError } from "../store/selectors/location.selector";
import { Subscription, lastValueFrom, take } from 'rxjs';
import {
  getForecast,
  setCurrentLocationCoords,
  setLocationCoordsSuccess
} from '../store/actions/forecast-app.action';
import { defaultCoords } from '../shared/shared.constants';
import { DefineCurrentLocationService } from '../shared/services/define-current-location.service';

@Component({
  selector: 'app-forecast-sidebar',
  templateUrl: './forecast-sidebar.component.html',
  styleUrls: ['./forecast-sidebar.component.scss'],
  providers: [
    TemperatureValuePipe,
  ],
})
export class ForecastSidebarComponent {
  @Input() todayForecast: Forecast | null;
  @Input() isCelsius: boolean;

  isSearchPanelShown: boolean = false;

  currentCity$ = this.store.pipe(select(getCurrentCity));

  readonly todayDate = getCurrentDate();

  private subscription = new Subscription();

  get canGetTemp(): boolean {
    return !isNaN(this.tempValuePipe.transform(this.todayForecast?.main.temp, this.isCelsius));
  }

  constructor(
    private store: Store,
    private tempValuePipe: TemperatureValuePipe,
    private defineCurrentLocation: DefineCurrentLocationService,
  ) {}

  openSearchPanel(): void {
    this.isSearchPanelShown = !this.isSearchPanelShown;
  }

  findCurForecast(): void {
    this.store.dispatch(setCurrentLocationCoords());

    this.initCurrentLocationForecast();
  }

  private initCurrentLocationForecast(): void {
    this.subscription.add(
      this.store.pipe(select(isCoordsError)).subscribe(isCoordsError => {
        if (isCoordsError) {
          this.store.dispatch(getForecast(defaultCoords));
          this.store.dispatch(setLocationCoordsSuccess(defaultCoords))

          this.defineCurrentLocation.openLocationErrorDialog();
        }

        this.getForecastForCurLocation();
      })
    );
  }

  private async getForecastForCurLocation(): Promise<void> {
    const currentLocation = await lastValueFrom(
      this.store.select(getCurrentLocation).pipe(take(1))
    );

    this.store.dispatch(getForecast(currentLocation));
  }
}
