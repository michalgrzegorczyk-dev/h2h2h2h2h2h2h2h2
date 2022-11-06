import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Keyboard, Key } from "@hangman/hangman/domain";

@Component({
  selector: 'hangman-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyboardComponent {
  @Input()
  keyboard: Keyboard | null = { keys: [] };

  @Output()
  keyClicked = new EventEmitter<string>();

  clickKey(key: Key) {
    this.keyClicked.emit(key.value);
  }
}
