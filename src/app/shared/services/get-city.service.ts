import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {LngLat, City} from '../interfaces/geolocation.interface';
import {appId} from "../shared.constants";

@Injectable({
  providedIn: 'root'
})

export class GetCityService {
  constructor(
    private http: HttpClient
  ) { }

  fetchCurrentCity(coords: LngLat): Observable<City> {
    const params = new HttpParams({
      fromObject: {
      lat: coords.lat,
        lon: coords.lon,
        limit: 1,
        appid: appId,
      }
    });

    return this.http.get<City>('https://api.openweathermap.org/geo/1.0/reverse', {params});
  }

  getCitiesByName(city: string): Observable<City[]> {
    const params = new HttpParams({
      fromObject: {
        q: city,
        limit: 5,
        appid: appId,
      }
    });

    return this.http.get<City[]>('https://api.openweathermap.org/geo/1.0/direct', { params });
  }
}
