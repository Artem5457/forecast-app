import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LngLat} from "../interfaces/geolocation.interface";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class DefineCurrentLocationService {

  constructor(private http: HttpClient) {}

  // Check this result again
  defineIp(): Observable<any> {
    return this.http.get('https://ip-api.com/json/');
  }

  defineCurrentLocation(): Promise<LngLat> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
          resolve({lon: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });
  }
}
