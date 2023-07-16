import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CurrentLocationState} from "../reducers/location.reducer";
import {WEATHER_APP_KEYS} from "../keys";

export const getCurrentLocationState = createFeatureSelector<CurrentLocationState>(
  WEATHER_APP_KEYS.LOCATION,
);

export const isCityLoading = createSelector(
  getCurrentLocationState,
  (state) => state.isCityLoading,
);

export const getCurrentLocation = createSelector(
  getCurrentLocationState,
  (state) => state.locationCoords
);

export const getCurrentCity = createSelector(
  getCurrentLocationState,
  (state) => state.currentCity
);

export const isCoordsError = createSelector(
  getCurrentLocationState,
  (state) => state.isCoordsError,
);
