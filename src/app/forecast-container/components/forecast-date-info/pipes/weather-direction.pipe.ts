import {Pipe, PipeTransform} from '@angular/core';
import {COMPASS} from "../../../../shared/shared.constants";

@Pipe({
  name: 'weatherDirection'
})
export class WeatherDirectionPipe implements PipeTransform {
  transform(degree: number): COMPASS {
    if (degree > 350 && degree <= 10) {
      return COMPASS.NORTH;
    } else if (degree > 10 && degree <= 80) {
      return COMPASS.NORTHEAST;
    } else if (degree > 80 && degree <= 100) {
      return  COMPASS.EAST;
    } else if (degree > 100 && degree <= 170) {
      return COMPASS.SOUTHEAST;
    } else if (degree > 170 && degree <= 190) {
      return COMPASS.SOUTH;
    } else if (degree > 190 && degree <= 260) {
      return COMPASS.SOUTHWEST;
    } else if (degree > 260 && degree <= 280) {
      return COMPASS.WEST;
    } else {
      return  COMPASS.NORTHWEST;
    }
  }
}
