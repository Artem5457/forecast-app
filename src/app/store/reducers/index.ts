import {WEATHER_APP_KEYS} from "../keys";
import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import { environment } from '../../../environments/environment';
import {currentLocationReducer, CurrentLocationState} from "./location.reducer";
import {forecastReducer, ForecastState} from "./forecast.reducer";

export interface AppState {
  [WEATHER_APP_KEYS.LOCATION]: CurrentLocationState,
  [WEATHER_APP_KEYS.FORECAST]: ForecastState,
}

export const reducers: ActionReducerMap<AppState> = {
  [WEATHER_APP_KEYS.LOCATION]: currentLocationReducer,
  [WEATHER_APP_KEYS.FORECAST]: forecastReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
