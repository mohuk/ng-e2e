import { element, by, ElementFinder } from 'protractor';

export class LandingPage {

  searchBar: ElementFinder;

  constructor(){
    this.searchBar = element(by.css('.sbib_b'));
  }

}
