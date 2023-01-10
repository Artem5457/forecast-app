import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {
  @Output() closeSearchPanel = new EventEmitter<void>()
  constructor() { }

  ngOnInit(): void {
  }
}
