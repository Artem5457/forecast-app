import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForecastDatePipe} from "./forecast-date.pipe";

@NgModule({
  declarations: [
    ForecastDatePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ForecastDatePipe,
  ]
})
export class ForecastDateModule { }
