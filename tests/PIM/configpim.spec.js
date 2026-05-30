const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pom/LoginPage');
const PIMPage = require('../../pom/PIMPage');

test.describe('PIM - Add Employee', () => {

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
  

  test('Verify Optional Fields page opens', async ({ page }) => {   
    await page.getByRole('listitem').filter({ hasText: 'Configuration' }).locator('i').click();
    await page.getByRole('menuitem', { name: 'Optional Fields' }).click();
  });

  test('Verify Custom Fields page opens', async ({ page }) => {   
    await page.getByLabel('Topbar Menu').getByText('Configuration').click();
    await page.getByRole('menuitem', { name: 'Custom Fields' }).click();
  });
  test('Verify Data Import page opens', async ({ page }) => {
    await page.getByRole('listitem').filter({ hasText: 'Configuration' }).locator('i').click();
    await page.getByRole('menuitem', { name: 'Data Import' }).click();
  });
    test('Verify Reporting Methods page opens', async ({ page }) => {   
    await page.getByRole('listitem').filter({ hasText: 'Configuration' }).locator('i').click();
    await page.getByRole('menuitem', { name: 'Reporting Methods' }).click();
  });
    test('Verify Termination Reasons page opens', async ({ page }) => {
    await page.getByRole('listitem').filter({ hasText: 'Configuration' }).locator('i').click();
    await page.getByRole('listitem').filter({ hasText: /^Termination Reasons$/ }).click();
  });
});

