const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pom/LoginPage');

test.describe('Time Tests', () => {
let loginPage;

test.beforeEach(async ({ page }) => {
page.setDefaultTimeout(60000);
loginPage = new LoginPage(page);
await loginPage.goto();
await loginPage.login('Admin', 'admin123');
await page.getByRole('link', { name: 'Time' }).click();
});
test('customers project info with time check ', async ({ page }) => {
    await page.getByLabel('Topbar Menu').getByText('Project Info').click();
    await page.getByRole('menuitem', { name: 'Customers' }).click();
});

test('project info with time check ', async ({ page }) => {
    await page.getByLabel('Topbar Menu').getByText('Project Info').click();
    await page.getByRole('menuitem', { name: 'Projects' }).click();
});
});