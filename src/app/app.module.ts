import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CollapsiblePanelComponent} from './collapsible-panel/collapsible-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    CollapsiblePanelComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
