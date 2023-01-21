import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-five-days-forecast',
  templateUrl: './five-days-forecast.component.html',
  styleUrls: ['./five-days-forecast.component.scss']
})
export class FiveDaysForecastComponent implements OnInit {
  readonly fiveDaysForecast = [
    {
      date: '2013-12-09',
      min: 19,
      max: 25,
    },
    {
      date: '2016-10-19',
      min: 29,
      max: 34,
    },
    {
      date: '2017-12-19',
      min: 19,
      max: 25,
    },
    {
      date: '2014-10-19',
      min: 29,
      max: 34,
    },
    {
      date: '2013-12-09',
      min: 19,
      max: 25,
    },
  ]

  constructor() { }

  ngOnInit(): void { }
}
