import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LngLat} from "../interfaces/geolocation.interface";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class DefineCurrentLocationService {

  constructor(private http: HttpClient) {}

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
