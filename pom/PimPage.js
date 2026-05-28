
class PIMPage {

  constructor(page) {
    this.page = page;

    // Locators
    this.pimMenu = 'span:has-text("PIM")';

    this.employeeSearch = '(//input[@placeholder="Type for hints..."])[1]';

    this.searchButton = 'button[type="submit"]';

    this.employeeTable = '.oxd-table-body';
  }

  // Open PIM Module
  async openPIM() {
    await this.page.click(this.pimMenu);
  }

  // Search Employee
  async searchEmployeeByName(name) {

    // Fill Employee Name
    await this.page.fill(this.employeeSearch, name);

    // Click Search
    await this.page.click(this.searchButton);

    // Verify Results
    await this.page.waitForSelector(this.employeeTable, {
      state: 'visible',
      timeout: 60000
    });
  }
}

module.exports = PIMPage;