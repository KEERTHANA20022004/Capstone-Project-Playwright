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

test('Verify Time tab', async ({ page }) => {
await page.getByRole('link', { name: 'Time' }).click();
});

 test('to view the timesheet', async ({ page }) => {
     await page.getByRole('textbox', { name: 'Type for hints...' }).click();
     await page.getByRole('textbox', { name: 'Type for hints...' }).fill('rahu');
     await page.locator('form').getByRole('button', { name: 'View' }).click();
     
});

test('to edit the timesheet', async ({ page }) => {
    await page.getByRole('listitem').filter({ hasText: 'Timesheets' }).locator('i').click();
    await page.getByRole('listitem').filter({ hasText: /^My Timesheets$/ }).click();
    await page.getByRole('button', { name: 'Edit' }).click();

});

test('to validate the timesheet', async ({ page }) => {
     await page.getByRole('listitem').filter({ hasText: 'Timesheets' }).locator('i').click();
     await page.getByRole('menuitem', { name: 'My Timesheets' }).click();
     await page.getByRole('button').nth(3).click();
     await page.getByRole('button').nth(4).click();
     await page.getByRole('button').nth(4).click();      
});




});

