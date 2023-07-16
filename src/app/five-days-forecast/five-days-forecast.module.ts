import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {FiveDaysForecastComponent} from "./five-days-forecast.component";
import { DayForecastComponent } from './day-forecast/day-forecast.component';
import { ForecastDateModule } from "../shared/pipes/forecast-date/forecast-date.module";
import {TemperatureModule} from "../shared/pipes/temperature/temperature.module";
import {WeatherIconModule} from "../shared/pipes/weather-icon/weather-icon.module";

@NgModule({
  declarations: [
    FiveDaysForecastComponent,
    DayForecastComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ForecastDateModule,
    TemperatureModule,
    WeatherIconModule,
  ],
  exports: [
    FiveDaysForecastComponent,
  ]
})
export class FiveDaysForecastModule { }
