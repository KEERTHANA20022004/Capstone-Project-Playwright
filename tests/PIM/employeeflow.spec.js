const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pom/LoginPage');
const PIMPage = require('../../pom/PIMPage');

test.describe('PIM - Employee Full Flow', () => {

  let loginPage;
  let pimPage;

  test.beforeEach(async ({ page }) => {

    page.setDefaultTimeout(60000);

    loginPage = new LoginPage(page);
    pimPage = new PIMPage(page);

    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');

    await pimPage.openPIM();
  });

  

  test('Search employee after navigation', async ({ page }) => {

    const fullName = 'John Smith';

    await pimPage.searchEmployeeByName(fullName);

    await expect(page.locator('.oxd-table-body')).toBeVisible();

  
  });

});