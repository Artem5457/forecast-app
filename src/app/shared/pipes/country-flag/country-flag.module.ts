import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryFlagPipe } from './country-flag.pipe';

@NgModule({
  declarations: [
    CountryFlagPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CountryFlagPipe,
  ]
})
export class CountryFlagModule { }
