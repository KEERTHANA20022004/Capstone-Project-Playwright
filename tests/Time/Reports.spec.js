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
test('project reports with time check ', async ({ page }) => {
    await page.getByLabel('Topbar Menu').getByText('Reports').click();
    await page.getByRole('menuitem', { name: 'Project Reports' }).click();
});
test('employee reports with time check ', async ({ page }) => {
    await page.getByLabel('Topbar Menu').getByText('Reports').click();
    await page.getByRole('menuitem', { name: 'Employee Reports' }).click();
});
test('attendance summary with time check ', async ({ page }) => {
    await page.getByLabel('Topbar Menu').getByText('Reports').click();
    await page.getByRole('listitem').filter({ hasText: /^Attendance Summary$/ }).click();
});

});

