import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clues';
}

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
export class CollapsiblePanelComponent {
  visible: boolean;
}
