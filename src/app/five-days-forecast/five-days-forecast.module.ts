import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {FiveDaysForecastComponent} from "./five-days-forecast.component";
import { DayForecastComponent } from './day-forecast/day-forecast.component';

@NgModule({
  declarations: [
    FiveDaysForecastComponent,
    DayForecastComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    FiveDaysForecastComponent,
  ]
})
export class FiveDaysForecastModule { }
