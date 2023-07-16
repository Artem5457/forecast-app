export interface LngLat {
  lon: number;
  lat: number;
}

export interface City extends LngLat{
  name: string;
  country: string;
  state: string;
}
