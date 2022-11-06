import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from "@angular/router";
import { GameComponent } from "./game.component";
import { WordGuessComponent } from "../../components/word-guess/word-guess.component";
import { StatusDisplayComponent } from "../../components/status-display/status-display.component";
import { HangmanDomainModule } from "@hangman/hangman/domain";
import { KeyboardComponent } from "../../components/keyboard/keyboard.component";

const routes: Route[] = [
  {
    path: '',
    component: GameComponent
  },
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes), HangmanDomainModule ],
  declarations: [ GameComponent, WordGuessComponent, StatusDisplayComponent, KeyboardComponent ],
})
export class GameModule {}
