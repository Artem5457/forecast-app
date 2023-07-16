import { WeatherQuery } from "./interfaces/forecast.interface";

export const appId = 'a34fcc171dc45409dcb4d2f9202914ff';
export const defaultCoords = {
  lon: 35.0470608,
  lat: 48.4213257
};

export enum Breakpoints {
  Mobile = '400px',
}

export enum WEATHER_MAIN {
  THUNDERSTORM = 'Thunderstorm',
  DRIZZLE = 'Drizzle',
  RAIN = 'Rain',
  SNOW = 'Snow',
  CLEAR = 'Clear',
  CLOUDS = 'Clouds',
}

export enum MAIN_ICONS {
  THUNDERSTORM = 'thunderstorm',
  SNOW = 'snow',
  SLEET = 'sleet',
  SHOWER = 'shower',
  LIGHT_RAIN = 'light_rain',
  LIGHT_CLOUD = 'light_cloud',
  HEAVY_RAIN = 'heavy_rain',
  HEAVY_CLOUD = 'heavy_cloud',
  HAIL = 'hail',
  CLEAR = 'clear',
  ATMOSPHERE = 'atmosphere'
}

export enum FORCE {
  LIGHT = 'light',
  HEAVY = 'heavy',
  EXTREME = 'extreme',
}

export enum LIGHT_CLOUDS {
  FEW = 'few clouds: 11-25%',
  SCATTERED = 'scattered clouds: 25-50%'
}

export const lightClouds: string[] = [
  LIGHT_CLOUDS.FEW,
  LIGHT_CLOUDS.SCATTERED
];

export const weatherQuery: WeatherQuery = {
  sleet: 'sleet',
  hail: 'freezing rain',
  shower: 'shower'
}

export enum DAYS_OF_WEEK {
  MON = 'Mon',
  TUE = 'Tue',
  WED = 'Wed',
  THR = 'Thr',
  FRI = 'Fri',
  SAT = 'Sat',
  SUN = 'Sun'
}

export enum MONTHS {
  JAN = 'Jan',
  FEB = 'Feb',
  MAR = 'Mar',
  APR = 'Apr',
  MAY = 'May',
  JUN = 'Jun',
  JUL = 'Jul',
  AUG = 'Aug',
  SEP = 'Sep',
  OCT = 'Oct',
  NOV = 'Nov',
  DEC = 'Dec',
}

export enum COMPASS {
  NORTH = 'North',
  NORTHEAST = 'North-East',
  EAST = 'East',
  SOUTHEAST = 'South-East',
  SOUTH = 'South',
  SOUTHWEST = 'South-West',
  WEST = 'West',
  NORTHWEST = 'North-West',
}
