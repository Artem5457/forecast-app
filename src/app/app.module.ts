import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ForecastSidebarModule } from './forecast-sidebar/forecast-sidebar.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { metaReducers, reducers } from './store/reducers';
import { effects } from './store/effects';
import { EffectsModule } from '@ngrx/effects';
import { ForecastContainerModule } from './forecast-container/forecast-container.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LocationErrorDialogComponent } from './location-error-dialog/location-error-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import {MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [AppComponent, LocationErrorDialogComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ForecastSidebarModule,
    ForecastContainerModule,
    BrowserAnimationsModule,
    MatDialogModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(effects),
  ],
  providers: [
    {
      provide: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,
      useValue: {
        diameter: 60,
        strokeWidth: 2.5,
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
