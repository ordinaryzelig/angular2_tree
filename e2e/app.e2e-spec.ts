import { TreePage } from './app.po';

describe('tree App', function() {
  let page: TreePage;

  beforeEach(() => {
    page = new TreePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
