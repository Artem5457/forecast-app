import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {getLocationCoords} from "../store/actions/forecast-app.action";

@Component({
  selector: 'app-forecast-sidebar',
  templateUrl: './forecast-sidebar.component.html',
  styleUrls: ['./forecast-sidebar.component.scss']
})
export class ForecastSidebarComponent {
  isSearchPanelShown: boolean = false;

  constructor(
    private store: Store,
  ) { }

  openSearchPanel(): void {
    this.isSearchPanelShown = !this.isSearchPanelShown;
  }

  findLocation(): void {
    this.store.dispatch(getLocationCoords());
  }
}
