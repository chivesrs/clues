import {CollapsiblePanelModule} from './collapsible-panel.module';

describe('CollapsiblePanelModule', () => {
  let collapsiblePanelModule: CollapsiblePanelModule;

  beforeEach(() => {
    collapsiblePanelModule = new CollapsiblePanelModule();
  });

  it('should create an instance', () => {
    expect(collapsiblePanelModule).toBeTruthy();
  });
});
