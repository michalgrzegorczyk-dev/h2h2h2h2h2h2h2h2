import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {LayoutsShellModule} from "@hangman/layouts/shell";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    LayoutsShellModule,
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: false,
      },
    }),
    EffectsModule.forRoot([]),
  ],
  exports: [RouterModule]
})
export class WebShellModule {}
