import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IconService} from "./shared/services/icon.service";
import {DefineCurrentLocationService} from "./shared/services/define-current-location.service";
import {GetForecastService} from "./shared/services/get-forecast.service";
import {GetCityService} from "./shared/services/get-city.service";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('forecastContainer', { read: ElementRef }) forecastContainer: ElementRef;

  isInfoBlockScrolled$ = new BehaviorSubject<boolean>(false);

  constructor(
    private store: Store,
    private iconService: IconService,
    private defineCurrentLocation: DefineCurrentLocationService,
    private getForecast: GetForecastService,
    private getCity: GetCityService,
  ) { }

  @HostListener('window: resize')
  onResize(): void {
    const element = this.forecastContainer.nativeElement;
    element.scrollHeight > element.clientHeight
      ? this.isInfoBlockScrolled$.next(true)
      : this.isInfoBlockScrolled$.next(false);
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    setTimeout(() => this.onResize(), 0);
  }
}
