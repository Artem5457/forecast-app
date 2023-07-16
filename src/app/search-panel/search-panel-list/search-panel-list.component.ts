import {Component, Input} from '@angular/core';
import {City} from "../../shared/interfaces/geolocation.interface";

@Component({
  selector: 'app-search-panel-list',
  templateUrl: './search-panel-list.component.html',
  styleUrls: ['./search-panel-list.component.scss']
})
export class SearchPanelListComponent {
  @Input() cities: City[];
}
