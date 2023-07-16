import {Component, Input, OnInit} from '@angular/core';
import {TemperatureValuePipe} from "../../shared/pipes/temperature/temperature-value.pipe";

@Component({
  selector: 'app-day-forecast',
  templateUrl: './day-forecast.component.html',
  styleUrls: ['./day-forecast.component.scss'],
  providers: [
    TemperatureValuePipe
  ],
})
export class DayForecastComponent implements OnInit {
  @Input() date: string;
  @Input() minTemp: number;
  @Input() maxTemp: number;
  @Input() isCelsius: boolean;
  @Input() iconWeather: string;
  @Input() description: string;

  get canGetMinTemp(): boolean {
    return !isNaN(this.tempValuePipe.transform(this.minTemp, this.isCelsius));
  }

  get canGetMaxTemp(): boolean {
    return !isNaN(this.tempValuePipe.transform(this.maxTemp, this.isCelsius));
  }


  constructor(
    private tempValuePipe: TemperatureValuePipe,
  ) { }

  ngOnInit(): void { }
}
