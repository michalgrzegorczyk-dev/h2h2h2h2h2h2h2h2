import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";

export const routes: Route[] = [
  {
    path: 'hangman',
    loadChildren: async () => (await import('@hangman/layouts/feature-app-layout')).AppLayoutModule,
  },

  {
    path: '**',
    redirectTo: 'hangman',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class LayoutsShellModule {}
