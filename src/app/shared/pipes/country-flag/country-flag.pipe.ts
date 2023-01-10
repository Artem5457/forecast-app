import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryFlag'
})
export class CountryFlagPipe implements PipeTransform {
  transform(countryCode: string): string {
    return `https://ipgeolocation.io/static/flags/${countryCode?.toLowerCase()}_64.png`;
  }
}
