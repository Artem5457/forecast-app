import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('forecastContainer', { read: ElementRef }) forecastContainer: ElementRef;

  isInfoBlockScrolled$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  @HostListener('window: resize')
  onResize(): void {
    const element = this.forecastContainer.nativeElement;
    element.scrollHeight > element.clientHeight
      ? this.isInfoBlockScrolled$.next(true)
      : this.isInfoBlockScrolled$.next(false);
  }

  ngOnInit(): void {
    console.log(this.isInfoBlockScrolled$.getValue());
  }
}
