import { AddressBookAngularUiPage } from './app.po';

describe('address-book-angular-ui App', () => {
  let page: AddressBookAngularUiPage;

  beforeEach(() => {
    page = new AddressBookAngularUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
