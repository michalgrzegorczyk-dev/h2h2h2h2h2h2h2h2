import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'hangman-app-layout',
  template: '<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppLayoutComponent {}
