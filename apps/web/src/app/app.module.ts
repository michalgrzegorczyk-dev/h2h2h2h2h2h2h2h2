import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WebShellModule} from "@hangman/shell/feature";

@NgModule({
  declarations: [ AppComponent ],
  imports: [ WebShellModule ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
