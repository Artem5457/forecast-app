import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TemperatureDegreePipe} from "./temperature-degree.pipe";
import {TemperatureValuePipe} from "./temperature-value.pipe";

@NgModule({
  declarations: [
    TemperatureDegreePipe,
    TemperatureValuePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemperatureDegreePipe,
    TemperatureValuePipe,
  ]
})
export class TemperatureModule { }
