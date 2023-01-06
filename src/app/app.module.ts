import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ForecastContainerComponent } from './forecast-container/forecast-container.component';
import { ForecastSidebarComponent } from './forecast-sidebar/forecast-sidebar.component';
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ForecastContainerComponent,
    ForecastSidebarComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
