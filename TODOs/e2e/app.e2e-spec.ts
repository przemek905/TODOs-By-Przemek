import { TODOsPage } from './app.po';

describe('todos App', () => {
  let page: TODOsPage;

  beforeEach(() => {
    page = new TODOsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
