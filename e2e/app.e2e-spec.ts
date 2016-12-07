import { Angular2CrossoverAssignmentPage } from './app.po';

describe('angular2-crossover-assignment App', function() {
  let page: Angular2CrossoverAssignmentPage;

  beforeEach(() => {
    page = new Angular2CrossoverAssignmentPage();
  });

  it('should display Home text', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Home');
  });

  it('should display number of builds', () => {
    page.navigateToBuilds();
    expect(page.getNumberOfBuildsText()).toMatch(/Displaying (\d) builds\./);
    expect(page.getCollapsibleHeaders().count()).toEqual(6);
  });

  it('should expand while clicking header', () => {
    page.navigateToBuilds();
    page.getCollapsibleHeaders().get(1).click();
    expect(page.getCollapsibleHeaders().get(1).getAttribute('class')).toMatch("collapsible-header active");
  });

});
