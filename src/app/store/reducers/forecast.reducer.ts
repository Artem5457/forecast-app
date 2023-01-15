import { createReducer, on } from "@ngrx/store";
import { TypedAction } from "@ngrx/store/src/models";
import { FiveDaysForecast, Forecast } from "src/app/shared/interfaces/forecast.interface";
import {
  getFiveDaysForecastSuccess, getForecast,
  getForecastSuccess,
  setCelsius,
  setFahrenheit
} from "../actions/forecast-app.action";

export interface ForecastState {
  todayForecast: Forecast | null,
  isCelsius: boolean,
  isForecastLoading: boolean,
  fiveDaysForecast: FiveDaysForecast | null,
}

const initialState: ForecastState = {
  todayForecast: null,
  isCelsius: true,
  isForecastLoading: false,
  fiveDaysForecast: null,
}

const setForecastLoadingReducer = (
  state: ForecastState,
): ForecastState => {
  return {
    ...state,
    isForecastLoading: true,
  };
}

const getForecastReducer = (
  state: ForecastState,
  {type, ...payload}: TypedAction<string> & Forecast
): ForecastState => {
  return {
    ...state,
    todayForecast: payload,
    isForecastLoading: false,
  };
}

const setFahrenheitReducer = (state: ForecastState): ForecastState => {
  return {
    ...state,
    isCelsius: false,
  }
}

const setCelsiusReducer = (state: ForecastState): ForecastState => {
  return {
    ...state,
    isCelsius: true,
  }
}

const getFiveDaysForecastReducer = (
  state: ForecastState,
  {type, ...payload}: TypedAction<string> & FiveDaysForecast
): ForecastState => {
  return {
    ...state,
    fiveDaysForecast: payload,
    isForecastLoading: false,
  }
}

export const forecastReducer = createReducer(
  initialState,
  on(getForecast, setForecastLoadingReducer),
  on(getForecastSuccess, getForecastReducer),
  on(setFahrenheit, setFahrenheitReducer),
  on(setCelsius, setCelsiusReducer),
  on(getFiveDaysForecastSuccess, getFiveDaysForecastReducer)
)
