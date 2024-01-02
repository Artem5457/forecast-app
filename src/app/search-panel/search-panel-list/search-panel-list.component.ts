import {Component, EventEmitter, Input, Output} from '@angular/core';
import {City} from '../../shared/interfaces/geolocation.interface';
import {Store} from '@ngrx/store';
import {getForecast, getMyCitySuccess} from "../../store/actions/forecast-app.action";

@Component({
  selector: 'app-search-panel-list',
  templateUrl: './search-panel-list.component.html',
  styleUrls: ['./search-panel-list.component.scss'],
})
export class SearchPanelListComponent {
  @Input() cities: City[];
  @Output() closeSearchPanel = new EventEmitter<void>();

  constructor(private store: Store) {
  }

  getForecastForSearchedCity(city: City): void {
    this.store.dispatch(getForecast({lon: city.lon, lat: city.lat}));
    this.store.dispatch(getMyCitySuccess(city));
    this.closeSearchPanel.emit();
  }
}
