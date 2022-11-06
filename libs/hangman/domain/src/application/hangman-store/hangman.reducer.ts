import { createReducer, on, Action } from '@ngrx/store';
import { HangmanActions } from './hangman.actions';
import { isEqual, uniq } from 'lodash';
import { Keyboard } from "../../entities/keyboard.model";
import { Key } from "../../entities/key.model";

export const HANGMAN_FEATURE_KEY = 'hangman';

export interface HangmanState {
  level: number,
  maxLevel: number,
  lives: number;
  maxLives:number;
  guessedLetters: string[];
  word: string;
  wins: number;
  wordLetters: string[];
  isGameOver: boolean;
  isGameWon: boolean;
  keyboard: Keyboard;
  words: string[];
}

export const initialHangmanState: HangmanState = {
  level: 1,
  maxLevel: 5,
  lives: 6,
  maxLives: 6,
  guessedLetters: [],
  word: '',
  wordLetters: [],
  wins: 0,
  isGameOver: false,
  isGameWon: false,
  keyboard: {
    keys: [
      {
        value: 'a',
        disabled: false
      },
      {
        value: 'b',
        disabled: false
      },
      {
        value: 'c',
        disabled: false
      },
      {
        value: 'd',
        disabled: false
      },
      {
        value: 'e',
        disabled: false
      },
      {
        value: 'f',
        disabled: false
      },
      {
        value: 'g',
        disabled: false
      },
      {
        value: 'h',
        disabled: false
      },
      {
        value: 'i',
        disabled: false
      },
      {
        value: 'j',
        disabled: false
      },
      {
        value: 'k',
        disabled: false
      },
      {
        value: 'l',
        disabled: false
      },
      {
        value: 'm',
        disabled: false
      },
      {
        value: 'n',
        disabled: false
      },
      {
        value: 'o',
        disabled: false
      },
      {
        value: 'p',
        disabled: false
      },
      {
        value: 'r',
        disabled: false
      },
      {
        value: 's',
        disabled: false
      },
      {
        value: 't',
        disabled: false
      },
      {
        value: 'u',
        disabled: false
      },
      {
        value: 'v',
        disabled: false
      },
      {
        value: 'w',
        disabled: false
      },
      {
        value: 'y',
        disabled: false
      },
      {
        value: 'z',
        disabled: false
      },
    ]
  },
  words: [],
}

const reducer = createReducer(
  initialHangmanState,
  on(HangmanActions.addGuessedLetter, (state, { letter }) => {
    const keys: Key[] = [...state.keyboard.keys].map(key => {
      if(key.value === letter) {
        key = { ...key, disabled: true }
      }
      return key;
    });

    if (state.wordLetters.includes(letter)) {
      return checkIfRoundWon(state, letter, keys);
    } else {
      return checkIfRoundLost(state, keys);
    }
  }),

  on(HangmanActions.resetGame, () => {
    return {
      ...initialHangmanState,
    }
  }),

  on(HangmanActions.loadWordsSuccess, (state, { words }) => {
    const word = words[0];
    const wordLetters = uniq(word.split('')).sort();
    return {
      ...state,
      word,
      wordLetters,
      words
    }
  }),

  on(HangmanActions.startNextRound, (state) => {
    const word = state.words[state.level];
    const wordLetters = uniq(word.split('')).sort();
    return {
      ...state,
      lives: state.maxLives,
      level: state.level + 1,
      guessedLetters: [],
      word: word,
      wordLetters: wordLetters,
      keyboard: { ...state.keyboard, keys: initialHangmanState.keyboard.keys }
    }
  })
);

function checkIfRoundWon(state: HangmanState, letter: string, keys: Key[]) {
  const guessedLetters = [...state.guessedLetters, letter];
  if (isEqual(guessedLetters.sort(), state.wordLetters)) {

    const winsInternal = state.wins + 1;

    if (winsInternal === state.maxLevel) {
      return {
        ...state,
        isGameWon: true,
        wins: winsInternal,
        guessedLetters,
        keyboard: {...state.keyboard, keys}
      };
    }

    return {
      ...state,
      wins: state.wins + 1,
      guessedLetters,
      keyboard: {...state.keyboard, keys}
    };
  } else {
    return {
      ...state,
      guessedLetters,
      keyboard: {...state.keyboard, keys}
    };
  }
}

function checkIfRoundLost(state: HangmanState, keys: Key[]) {
  if (state.lives === 1) {
    return {
      ...state,
      isGameOver: true,
      keyboard: {...state.keyboard, keys}
    }
  }

  return {
    ...state,
    lives: state.lives - 1,
    keyboard: {...state.keyboard, keys}
  };
}

export function hangmanReducer(state: HangmanState, action: Action) {
  return reducer(state, action);
}
