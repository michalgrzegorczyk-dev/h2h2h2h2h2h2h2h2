import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout.component';
import {RouterModule, Route} from "@angular/router";

const routes: Route[] = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: async () => (
          await import('@hangman/hangman/shell')
        ).HangmanShellModule,
      },
    ]
  },

  {
    path: '**',
    redirectTo: 'x',
    pathMatch: 'full',
  },
];

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ],
  declarations: [
    AppLayoutComponent
  ],
})
export class AppLayoutModule {}
