import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { FiveDaysForecast, Forecast } from '../interfaces/forecast.interface';
import {LngLat} from "../interfaces/geolocation.interface";
import {appId} from "../shared.constants";

@Injectable({
  providedIn: 'root'
})

export class GetForecastService {
  constructor(
    private http: HttpClient
  ) { }

  getForecastForCurrentMoment(coords: LngLat): Observable<Forecast> {
    const params = new HttpParams({
      fromObject: {
        lat: coords.lat,
        lon: coords.lon,
        appid: appId,
      }
    });

    return this.http.get<Forecast>('https://api.openweathermap.org/data/2.5/weather', {params});
  }

  getFiveDayForecast(coords: LngLat): Observable<FiveDaysForecast> {
    const params = new HttpParams({
      fromObject: {
        lat: coords.lat,
        lon: coords.lon,
        appid: appId,
      }
    });

    return this.http.get<FiveDaysForecast>('https://api.openweathermap.org/data/2.5/forecast', {params});
  }
}
