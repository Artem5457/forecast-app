import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FiveDaysForecast, Forecast } from '../interfaces/forecast.interface';
import { LngLat } from '../interfaces/geolocation.interface';
import { appId } from '../shared.constants';

@Injectable({
  providedIn: 'root',
})
export class GetForecastService {
  constructor(private http: HttpClient) {}

  getForecastForCurrentMoment(coords: LngLat): Observable<Forecast> {
    const params = new HttpParams({
      fromObject: {
        lat: coords.lat,
        lon: coords.lon,
        appid: appId,
      },
    });

    return this.http
      .get<Forecast>('https://api.openweathermap.org/data/2.5/weather', {
        params,
      })
      .pipe(
        map((forecast) => {
          return {
            weather: forecast.weather,
            main: forecast.main,
            visibility: forecast.visibility,
            wind: forecast.wind,
            clouds: forecast.clouds,
            dt_txt: forecast.dt_txt,
          };
        })
      );
  }

  getForecastByCityName(
    city: string,
    contryCode: string
  ): Observable<Forecast> {
    return this.http
      .get<Forecast>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${contryCode}&appid=${appId}`
      )
      .pipe(
        map((forecast) => {
          return {
            weather: forecast.weather,
            main: forecast.main,
            visibility: forecast.visibility,
            wind: forecast.wind,
            clouds: forecast.clouds,
            dt_txt: forecast.dt_txt,
          };
        })
      );
  }

  getFiveDayForecast(coords: LngLat): Observable<FiveDaysForecast> {
    const params = new HttpParams({
      fromObject: {
        lat: coords.lat,
        lon: coords.lon,
        appid: appId,
      },
    });

    return this.http
      .get<FiveDaysForecast>(
        'https://api.openweathermap.org/data/2.5/forecast',
        { params }
      )
      .pipe(
        map((res) => {
          return { list: res.list };
        })
      );
  }
}
