import { UnityPage } from './app.po';

describe('unity App', function() {
  let page: UnityPage;

  beforeEach(() => {
    page = new UnityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
