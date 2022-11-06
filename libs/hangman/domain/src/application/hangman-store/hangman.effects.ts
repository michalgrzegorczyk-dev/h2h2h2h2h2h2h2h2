import {Injectable, inject} from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { HangmanActions } from './hangman.actions';
import { HangmanService } from "../../infrastructure/services/hangman.service";
import { switchMap, of } from "rxjs";

@Injectable()
export class HangmanEffects {
  private actions$ = inject(Actions);
  private hangmanService = inject(HangmanService);

  loadWords$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(HangmanActions.loadWords),
        fetch({
          run: () => {
            return this.hangmanService.getWords().pipe(switchMap((answers) => {
              return of(HangmanActions.loadWordsSuccess({ words: answers.words }));
            }));
          },
          onError: (action, error) => {
            console.error('Error', error);
          },
        })
      );
    }
  );
}
