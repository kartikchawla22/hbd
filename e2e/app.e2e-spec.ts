import { HbdPage } from './app.po';

describe('hbd App', function() {
  let page: HbdPage;

  beforeEach(() => {
    page = new HbdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
