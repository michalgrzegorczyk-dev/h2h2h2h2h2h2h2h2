import { Injectable, inject } from '@angular/core';
import { Store } from "@ngrx/store";
import { HangmanActions } from './hangman-store/hangman.actions';
import * as  HangmanSelectors from './hangman-store/hangman.selectors';

@Injectable()
export class HangmanFacade {
  private store = inject(Store);

  guessedLetters$ = this.store.select(HangmanSelectors.getGuessedLetters);
  lives$ = this.store.select(HangmanSelectors.getLives);
  maxLives$ = this.store.select(HangmanSelectors.getMaxLives);
  level$ = this.store.select(HangmanSelectors.getLevel);
  maxLevel$ = this.store.select(HangmanSelectors.getMaxLevel);
  word$ = this.store.select(HangmanSelectors.getWord);
  isGameOver$ = this.store.select(HangmanSelectors.getIsGameOver);
  isGameWon$ = this.store.select(HangmanSelectors.getIsGameWon);
  wins$ = this.store.select(HangmanSelectors.getWins);
  keyboard$ = this.store.select(HangmanSelectors.getKeyboard);

  constructor() {
    this.store.dispatch(HangmanActions.loadWords());
  }

  addGuessedLetter(letter: string) {
    this.store.dispatch(HangmanActions.addGuessedLetter({ letter }))
  }

  startNextRound() {
    this.store.dispatch(HangmanActions.startNextRound())
  }

  resetGame() {
    this.store.dispatch(HangmanActions.resetGame())
    this.store.dispatch(HangmanActions.loadWords())
  }
}
