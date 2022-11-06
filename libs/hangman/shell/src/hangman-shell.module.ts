import { NgModule } from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import { HangmanShellComponent } from './hangman-shell.component';

export const routes: Route[] = [
  {
    path: '',
    component: HangmanShellComponent,
    children: [
      {
        path: '',
        loadChildren: async () => (
          await import('@hangman/hangman/feature-hangman')
        ).FeatureHangmanModule,
      },
    ],
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  declarations: [ HangmanShellComponent ],
})
export class HangmanShellModule {}
