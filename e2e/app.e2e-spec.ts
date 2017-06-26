import { MathquizPage } from './app.po';

describe('mathquiz App', () => {
  let page: MathquizPage;

  beforeEach(() => {
    page = new MathquizPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
