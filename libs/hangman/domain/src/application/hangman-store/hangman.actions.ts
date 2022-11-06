import {props, createActionGroup, emptyProps} from '@ngrx/store';

export const HangmanActions = createActionGroup({
  source: 'Hangman',
  events: {
    'Add Guessed Letter': props<{ letter: string }>(),
    'Reset Game': emptyProps(),
    'Start Next Round': emptyProps(),
    'Load Words': emptyProps(),
    'Load Words Success': props<{ words: string[] }>(),
  },
});
