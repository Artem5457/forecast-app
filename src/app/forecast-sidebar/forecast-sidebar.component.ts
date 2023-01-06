import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast-sidebar',
  templateUrl: './forecast-sidebar.component.html',
  styleUrls: ['./forecast-sidebar.component.scss']
})
export class ForecastSidebarComponent implements OnInit {
  isShowPanel: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
