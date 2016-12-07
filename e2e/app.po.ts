import { browser, element, by } from 'protractor/globals';

export class Angular2CrossoverAssignmentPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root p')).getText();
  }

  navigateToBuilds() {
    return browser.get('/builds');
  }

  getNumberOfBuildsText() {
    return element(by.css('app-builds p')).getText();
  }

  getCollapsibleHeaders(){
    return element.all(by.css('.collapsible-header'));
  }

}
