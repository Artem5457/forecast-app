import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForecastContainerComponent} from "./forecast-container.component";
import {MatIconModule} from "@angular/material/icon";
import { TempChangerComponent } from './components/temp-changer/temp-changer.component';
import {FiveDaysForecastModule} from "../five-days-forecast/five-days-forecast.module";
import {ForecastDateInfoModule} from "./components/forecast-date-info/forecast-date-info.module";

@NgModule({
  declarations: [
    ForecastContainerComponent,
    TempChangerComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FiveDaysForecastModule,
    ForecastDateInfoModule,
  ],
  exports: [
    ForecastContainerComponent,
  ]
})
export class ForecastContainerModule { }
