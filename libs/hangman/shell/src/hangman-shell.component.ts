import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hangman-hangman',
  template:'<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HangmanShellComponent {}
