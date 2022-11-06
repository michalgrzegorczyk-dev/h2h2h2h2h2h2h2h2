import { NgModule } from '@angular/core';
import { EntryScreenComponent } from './containers/entry-screen/entry-screen.component';
import { RouterModule, Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    component: EntryScreenComponent,
    children: [
      {
        path: 'game',
        loadChildren: async () =>
          (await import('./containers/game/game.module')).GameModule,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [EntryScreenComponent],
})
export class FeatureHangmanModule {}
