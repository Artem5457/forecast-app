import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ForecastContainerComponent } from './forecast-container/forecast-container.component';
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {ForecastSidebarModule} from "./forecast-sidebar/forecast-sidebar.module";

@NgModule({
  declarations: [
    AppComponent,
    ForecastContainerComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    HttpClientModule,
    ForecastSidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
