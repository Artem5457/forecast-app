import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-day-forecast',
  templateUrl: './day-forecast.component.html',
  styleUrls: ['./day-forecast.component.scss']
})
export class DayForecastComponent implements OnInit {
  @Input() date: string;
  @Input() minTemp: number;
  @Input() maxTemp: number;

  constructor() { }

  ngOnInit(): void { }
}
