import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'hangman-status-display',
  templateUrl: './status-display.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusDisplayComponent {
  @Input()
  lives!: number | null;

  @Input()
  maxLives!: number | null;

  @Input()
  level!: number | null;

  @Input()
  maxLevel!: number | null;
}
