import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'hangman-word-guess',
  templateUrl: './word-guess.component.html',
  styleUrls: ['./word-guess.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordGuessComponent {
  @Input()
  set word(word : string | null) {
      if (word) {
          this.wordSplit$.next(word.split(''));
      }
  }

  @Input()
  guessedLetters: string[] | null = null;

  wordSplit$ = new Subject<string[]>();
}
