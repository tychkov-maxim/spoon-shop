import { SpoonAppPage } from './app.po';

describe('spoon-app App', function() {
  let page: SpoonAppPage;

  beforeEach(() => {
    page = new SpoonAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
