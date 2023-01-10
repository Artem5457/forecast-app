import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CountryFlagModule} from "../shared/pipes/country-flag/country-flag.module";
import {WeatherIconModule} from "../shared/pipes/weather-icon/weather-icon.module";
import {SearchPanelModule} from "../search-panel/search-panel.module";
import {ForecastSidebarComponent} from "./forecast-sidebar.component";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    ForecastSidebarComponent
  ],
  imports: [
    CommonModule,
    CountryFlagModule,
    WeatherIconModule,
    SearchPanelModule,
    MatIconModule,
  ],
  exports: [
    ForecastSidebarComponent
  ]
})
export class ForecastSidebarModule { }
