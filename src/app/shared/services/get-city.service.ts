import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
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

    return this.http.get<City[]>('https://api.openweathermap.org/geo/1.0/reverse', {params}).pipe(
      map(cities => {
        return {
          name: cities[0]?.name,
          country: cities[0]?.country,
          lon: cities[0]?.lon,
          lat: cities[0]?.lat,
          state: cities[0]?.state,
        }
      })
    );
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
