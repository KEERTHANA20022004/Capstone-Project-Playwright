const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pom/LoginPage');

test.describe('Leave List Tests', () => {
  
let loginPage;

test.beforeEach(async ({ page }) => {
page.setDefaultTimeout(60000);
loginPage = new LoginPage(page);
await loginPage.goto();
await loginPage.login('Admin', 'admin123');
await page.click('span:has-text("Leave")');
});

test('entitlements', async ({ page }) => {
await page.getByText('Entitlements').click();
await page.getByRole('menuitem', { name: 'Add Entitlements' }).click();
});

test('employee entitlements', async ({ page }) => {
await page.getByLabel('Topbar Menu').getByText('Entitlements').click();
await page.getByRole('menuitem', { name: 'Employee Entitlements' }).click();
});

test('my entitlements', async ({ page }) => {
await page.getByLabel('Topbar Menu').getByText('Entitlements').click();
await page.getByRole('menuitem', { name: 'My Entitlements' }).click();
await page.getByRole('button', { name: 'Search' }).click();
});
});

