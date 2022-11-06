import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromHangman from './application/hangman-store/hangman.reducer';
import { HangmanEffects } from './application/hangman-store/hangman.effects';
import { HangmanFacade } from "./application/hangman.facade";
import { HangmanService } from "./infrastructure/services/hangman.service";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromHangman.HANGMAN_FEATURE_KEY, fromHangman.hangmanReducer),
    EffectsModule.forFeature([ HangmanEffects ]),
  ],
  providers: [ HangmanFacade, HangmanService ]
})
export class HangmanDomainModule {}
