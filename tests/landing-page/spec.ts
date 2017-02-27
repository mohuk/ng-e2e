import { browser, by, element } from 'protractor';
import { LandingPage } from './page';

describe('Google Search', () => {

  const landingPage = new LandingPage();

  describe('Landing page', () => {
    it('should display search bar', () => {
      expect(landingPage.searchBar).toBeDefined();
    });
  });

});
