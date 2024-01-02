import { createReducer, on } from "@ngrx/store";
import { TypedAction } from "@ngrx/store/src/models";
import { LngLat, City } from "src/app/shared/interfaces/geolocation.interface";
import {
  setLocationCoordsError,
  setLocationCoordsSuccess,
  getMyCitySuccess
} from "../actions/forecast-app.action";

export interface CurrentLocationState {
  locationCoords: LngLat | null,
  currentCity: City | null,
  isCityLoading: boolean,
  isCoordsError: boolean,
}

const initialState: CurrentLocationState = {
  locationCoords: null,
  isCoordsError: false,
  isCityLoading: false,
  currentCity: null,
}

const defineLocationCoordsReducer = (
  state: CurrentLocationState,
  {type, ...payload}: TypedAction<string> & LngLat
): CurrentLocationState => {
  return {
    ...state,
    locationCoords: payload,
    isCityLoading: true,
  };
}

const getMyCityReducer = (
  state: CurrentLocationState,
  {type, ...payload}: TypedAction<string> & City
): CurrentLocationState => {
  return {
    ...state,
    currentCity: payload,
    isCityLoading: false,
  }
}

const getCoordsErrorReducer = (state: CurrentLocationState): CurrentLocationState => {
  return {
    ...state,
    isCoordsError: true,
    isCityLoading: false,
  }
}

export const currentLocationReducer = createReducer(
  initialState,
  on(setLocationCoordsSuccess, defineLocationCoordsReducer),
  on(setLocationCoordsError, getCoordsErrorReducer),
  on(getMyCitySuccess, getMyCityReducer),
);
