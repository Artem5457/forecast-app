import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {ForecastDateInfoComponent} from "./forecast-date-info.component";
import {WeatherDirectionPipe} from "./pipes/weather-direction.pipe";
import {MeterToKmPipe} from "./pipes/meter-to-km.pipe";
import {ProgressBarComponent} from "./progress-bar/progress-bar.component";

@NgModule({
  declarations: [
    ForecastDateInfoComponent,
    WeatherDirectionPipe,
    MeterToKmPipe,
    ProgressBarComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    ForecastDateInfoComponent,
  ]
})
export class ForecastDateInfoModule { }
