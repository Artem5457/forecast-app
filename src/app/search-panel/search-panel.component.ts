import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  pluck,
  Subscription,
  switchMap
} from 'rxjs';
import {GetCityService} from "../shared/services/get-city.service";
import {City} from "../shared/interfaces/geolocation.interface";

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit, OnDestroy {
  @Output() closeSearchPanel = new EventEmitter<void>()
  @ViewChild('searchInput', {read: ElementRef}) searchInput: ElementRef;
  cities: City[] = [];

  private subscription: Subscription = new Subscription();

  constructor(
    private getCityService: GetCityService,
  ) {
  }

  ngOnInit(): void {
    this.searchCitiesByName();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private searchCitiesByName(): void {
    setTimeout(() => {
      this.subscription.add(
        fromEvent(this.searchInput.nativeElement, 'input')
          .pipe(
            pluck('target', 'value'),
            debounceTime(500),
            distinctUntilChanged(),
            switchMap((city: string) => {
              return this.getCityService.getCitiesByName(city || '  ');
            }),
          ).subscribe((cities: City[]) => {
          this.cities = cities;
          console.log('Cities: ', this.cities);
        })
      )
    }, 0);
  }
}
