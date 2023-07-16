import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getLocationCoords } from '../store/actions/forecast-app.action';
import { MatDialog } from "@angular/material/dialog";
import { Forecast } from '../shared/interfaces/forecast.interface';
import { TemperatureValuePipe } from "../shared/pipes/temperature/temperature-value.pipe";
import { getCurrentDate } from "../shared/helpers/date.helper";
import { getCurrentCity } from "../store/selectors/location.selector";

@Component({
  selector: 'app-forecast-sidebar',
  templateUrl: './forecast-sidebar.component.html',
  styleUrls: ['./forecast-sidebar.component.scss'],
  providers: [
    TemperatureValuePipe,
  ]
})
export class ForecastSidebarComponent implements OnInit {
  @Input() todayForecast: Forecast | null;
  @Input() isCelsius: boolean;

  isSearchPanelShown: boolean = false;
  currentCity$ = this.store.pipe(select(getCurrentCity));

  readonly todayDate = getCurrentDate();

  get canGetTemp(): boolean {
    return !isNaN(this.tempValuePipe.transform(this.todayForecast?.main.temp, this.isCelsius));
  }

  constructor(
    private store: Store,
    private dialog: MatDialog,
    private tempValuePipe: TemperatureValuePipe,
  ) {}

  ngOnInit(): void { }

  openSearchPanel(): void {
    this.isSearchPanelShown = !this.isSearchPanelShown;
  }

  findLocation(): void {
    this.store.dispatch(getLocationCoords());
  }
}
