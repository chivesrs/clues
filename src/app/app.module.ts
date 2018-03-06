import {BrowserModule} from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';


import {AppComponent} from './app.component';

@Component({
  selector: 'collapsible-panel',
  template: `
  <div class="panel">
    <div class="panel-heading" (click)="visible = !visible">
      <h3 class="panel-title">
        <ng-content select="span.title"></ng-content>
      </h3>
    </div>
    <div class="panel-body" *ngIf="visible">
      <ng-content></ng-content>
    </div>
  </div>
  `
})
class CollapsiblePanelComponent {
  visible: false;
}


@NgModule({
  declarations: [
    AppComponent,
    CollapsiblePanelComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
