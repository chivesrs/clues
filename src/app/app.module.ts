import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CollapsiblePanelModule} from './collapsible-panel/collapsible-panel.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CollapsiblePanelModule,
  ],
  providers: [],
})
export class AppModule {
}
