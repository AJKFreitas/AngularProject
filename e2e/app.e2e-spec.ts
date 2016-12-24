import { QuickStatarPage } from './app.po';

describe('quick-statar App', function() {
  let page: QuickStatarPage;

  beforeEach(() => {
    page = new QuickStatarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
