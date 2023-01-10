import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CountryFlagModule} from "../shared/pipes/country-flag/country-flag.module";
import {SearchPanelComponent} from "./search-panel.component";
import {SearchPanelListComponent} from "./search-panel-list/search-panel-list.component";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    SearchPanelComponent,
    SearchPanelListComponent
  ],
  imports: [
    CommonModule,
    CountryFlagModule,
    MatIconModule,
  ],
  exports: [
    SearchPanelComponent,
  ]
})
export class SearchPanelModule { }
