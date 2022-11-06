import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  HANGMAN_FEATURE_KEY,
  HangmanState,
} from './hangman.reducer';

export const getHangmanState =
  createFeatureSelector<HangmanState>(HANGMAN_FEATURE_KEY);

export const getGuessedLetters = createSelector(
  getHangmanState,
  (state: HangmanState) => state.guessedLetters
);

export const getLives = createSelector(
  getHangmanState,
  (state: HangmanState) => state.lives
);

export const getMaxLives = createSelector(
  getHangmanState,
  (state: HangmanState) => state.maxLives
);

export const getLevel = createSelector(
  getHangmanState,
  (state: HangmanState) => state.level
);

export const getMaxLevel = createSelector(
  getHangmanState,
  (state: HangmanState) => state.maxLevel
);

export const getWord = createSelector(
  getHangmanState,
  (state: HangmanState) => state.word
);

export const getIsGameOver = createSelector(
  getHangmanState,
  (state: HangmanState) => state.isGameOver
);

export const getWins = createSelector(
  getHangmanState,
  (state: HangmanState) => state.wins
);

export const getIsGameWon = createSelector(
  getHangmanState,
  (state: HangmanState) => state.isGameWon
);

export const getKeyboard = createSelector(
  getHangmanState,
  (state: HangmanState) => state.keyboard
);
