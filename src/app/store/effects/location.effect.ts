import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, switchMap, map} from 'rxjs';
import {LngLat, City} from 'src/app/shared/interfaces/geolocation.interface';
import {GetCityService} from 'src/app/shared/services/get-city.service';
import {DefineCurrentLocationService} from "../../shared/services/define-current-location.service";
import {
  setCurrentLocationCoords,
  setLocationCoordsSuccess,
  getMyCitySuccess,
  setLocationCoordsError,
} from "../actions/forecast-app.action";

@Injectable()
export class CurrentLocationEffect {
  getCurrentLocation$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(setCurrentLocationCoords),
      switchMap(() =>
        this.getCurLocationService
          .defineCurrentLocation()
          .then((coords) => setLocationCoordsSuccess(coords))
          .catch(() => setLocationCoordsError())
      )
    )
  );

  getCurrentCity$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(setLocationCoordsSuccess),
      switchMap((payload: LngLat) =>
        this.getCurrentCity.fetchCurrentCity(payload).pipe(
          map((location: City) => getMyCitySuccess(location))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private getCurLocationService: DefineCurrentLocationService,
    private getCurrentCity: GetCityService
  ) {
  }
}
