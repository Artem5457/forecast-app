import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CountryFlagModule} from "../shared/pipes/country-flag/country-flag.module";
import {WeatherIconModule} from "../shared/pipes/weather-icon/weather-icon.module";
import {SearchPanelModule} from "../search-panel/search-panel.module";
import {ForecastSidebarComponent} from "./forecast-sidebar.component";
import {MatIconModule} from "@angular/material/icon";
import { TemperatureModule } from "../shared/pipes/temperature/temperature.module";
import {ForecastDateModule} from "../shared/pipes/forecast-date/forecast-date.module";

@NgModule({
  declarations: [
    ForecastSidebarComponent
  ],
  exports: [
    ForecastSidebarComponent
  ],
  imports: [
    CommonModule,
    CountryFlagModule,
    WeatherIconModule,
    SearchPanelModule,
    MatIconModule,
    TemperatureModule,
    ForecastDateModule,
  ]
})
export class ForecastSidebarModule { }
