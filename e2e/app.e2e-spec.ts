import { SyronPage } from './app.po';

describe('syron App', function() {
  let page: SyronPage;

  beforeEach(() => {
    page = new SyronPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
