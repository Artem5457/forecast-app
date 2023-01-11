import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ForecastContainerComponent } from './forecast-container/forecast-container.component';
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {ForecastSidebarModule} from "./forecast-sidebar/forecast-sidebar.module";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {metaReducers, reducers} from "./store/reducers";
import {effects} from "./store/effects";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  declarations: [
    AppComponent,
    ForecastContainerComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    HttpClientModule,
    ForecastSidebarModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, logOnly: environment.production
    }),
    EffectsModule.forRoot(effects),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
