import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { HangmanFacade } from "@hangman/hangman/domain";
import { UntilDestroy } from "@ngneat/until-destroy";
import { combineLatest } from "rxjs";

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'hangman-game',
  templateUrl: './game.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent implements OnInit {
  private hangmanFacade = inject(HangmanFacade);

  guessedLetters$ = this.hangmanFacade.guessedLetters$;
  lives$ = this.hangmanFacade.lives$;
  maxLives$ = this.hangmanFacade.maxLives$;
  level$ = this.hangmanFacade.level$;
  maxLevel$ = this.hangmanFacade.maxLevel$;
  word$ = this.hangmanFacade.word$;
  isGameOver$ = this.hangmanFacade.isGameOver$
  isGameWon$ = this.hangmanFacade.isGameWon$;
  wins$ = this.hangmanFacade.wins$;
  keyboard$ = this.hangmanFacade.keyboard$;

  ngOnInit() {
    this.handleGameOver();
    this.handleGameWon();
    this.handleWinRound();
  }

  onKeyClicked(letter: string) {
    this.hangmanFacade.addGuessedLetter(letter);
  }

  private handleGameOver() {
    this.isGameOver$.subscribe(isGameOver => {
      if (isGameOver) {
        alert('PRZEGRAŁEŚ');
        this.hangmanFacade.resetGame();
      }
    });
  }

  private handleWinRound() {
    combineLatest([this.maxLevel$, this.wins$]).subscribe(([maxLevel, wins]) => {
      if(wins > 0 && wins < maxLevel) {
        alert('NASTĘPNA RUNDA');
        this.hangmanFacade.startNextRound();
      }
    });
  }

  private handleGameWon() {
    this.isGameWon$.subscribe(val => {
      if (val) {
        alert('WYGRAŁEŚ');
        this.hangmanFacade.resetGame();
      }
    })
  }
}
