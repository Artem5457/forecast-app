import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { BehaviorSubject, Observable, Subscription, lastValueFrom, take } from "rxjs";
import { select, Store } from "@ngrx/store";
import { getForecast, setCurrentLocationCoords, setLocationCoordsSuccess } from "./store/actions/forecast-app.action";
import { IconService } from './shared/services/icon.service';
import { DefineCurrentLocationService } from './shared/services/define-current-location.service';
import { getCurrentLocation, isCoordsError } from './store/selectors/location.selector';
import {getTodayForecast, isCelsius} from './store/selectors/forecast.selector';
import { Forecast } from './shared/interfaces/forecast.interface';
import { defaultCoords } from "./shared/shared.constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('forecastContainer', { read: ElementRef }) forecastContainer: ElementRef;

  isInfoBlockScrolled$ = new BehaviorSubject<boolean>(false);
  todayForecast$: Observable<Forecast> = this.store.pipe(select(getTodayForecast));
  isCelsius$ = this.store.select(isCelsius);

  private subscription = new Subscription();

  constructor(
    private store: Store,
    private iconService: IconService,
    private defineCurrentLocation: DefineCurrentLocationService,
  ) {}

  @HostListener('window: resize')
  onResize(): void {
    const element = this.forecastContainer.nativeElement;
    element.scrollHeight > element.clientHeight
      ? this.isInfoBlockScrolled$.next(true)
      : this.isInfoBlockScrolled$.next(false);
  }

  ngOnInit(): void {
    setTimeout(() => this.onResize(), 500);

    this.store.dispatch(setCurrentLocationCoords());

    this.initCurrentForecast();
    this.initForecastWithoutCurrentLocation();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private async initCurrentForecast(): Promise<void> {
    this.subscription.add(
      this.store.pipe(select(getCurrentLocation)).subscribe(coords => {
        if (coords) {
          this.store.dispatch(getForecast(coords));
        }
      })
    );
  }

  private initForecastWithoutCurrentLocation(): void {
    this.subscription.add(
      this.store.pipe(select(isCoordsError)).subscribe(isCoordsError => {
        if (isCoordsError) {
          this.store.dispatch(getForecast(defaultCoords));
          this.store.dispatch(setLocationCoordsSuccess(defaultCoords))

          this.defineCurrentLocation.openLocationErrorDialog();
        }
      })
    );
  }
}
