const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pom/LoginPage');

test.describe('Expenses claim Tests', () => {

  let loginPage;

  test.beforeEach(async ({ page }) => {
    page.setDefaultTimeout(60000);
    loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    await page.getByRole('link', { name: 'Claim' }).click();
  });

test('Expense Types', async ({ page }) => {
    await page.getByRole('listitem').filter({ hasText: 'Configuration' }).locator('i').click();
    await page.getByRole('menuitem', { name: 'Expense Types' }).click();
});

test('My Claims', async ({ page }) => {
    await page.getByRole('link', { name: 'My Claims' }).click();
});
test('Edit Claim', async ({ page }) => {
    await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
    await page.getByRole('option', { name: 'Accommodation' }).click();
}); 
test('Assign Claim', async ({ page }) => {
    await page.getByRole('listitem').filter({ hasText: 'Assign Claim' }).click();
});
test('Employee Claims', async ({ page }) => {
    await page.getByRole('listitem').filter({ hasText: 'Employee Claims' }).click();
}); 
test('Submit Claim', async ({ page }) => {
    await page.getByRole('listitem').filter({ hasText: 'Submit Claim' }).click();
});
test(' Configuration Events', async ({ page }) => {
    await page.getByRole('listitem').filter({ hasText: 'Configuration' }).locator('i').click();
    await page.getByRole('listitem').filter({ hasText: /^Events$/ }).click();
});
  });




