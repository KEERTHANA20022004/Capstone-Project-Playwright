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


// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByRole('link', { name: 'Time' }).click();
//   await page.getByText('Reports').click();
//   await page.getByRole('menuitem', { name: 'Project Reports' }).click();
//   await page.getByLabel('Topbar Menu').getByText('Reports').click();
//   await page.getByRole('menuitem', { name: 'Employee Reports' }).click();
//   await page.getByRole('button', { name: 'View' }).click();
//   await page.getByLabel('Topbar Menu').getByText('Reports').click();
//   await page.getByRole('listitem').filter({ hasText: /^Attendance Summary$/ }).click();
//   await page.getByLabel('Topbar Menu').getByText('Reports').click();
//   await page.getByRole('menuitem', { name: 'Project Reports' }).click();
//   await page.getByRole('textbox', { name: 'Type for hints...' }).click();
//   await page.getByRole('textbox', { name: 'Type for hints...' }).fill('co');
//   await page.getByText('The Coca-Cola Company - Coke - Phase').click();
//   await page.locator('.oxd-icon.bi-calendar').first().click();
//   await page.locator('.oxd-calendar-selector-year-selected > .oxd-icon').click();
//   await page.getByText('2025').click();
//   await page.getByText('14').click();
//   await page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click();
//   await page.getByText('Today').click();
//   await page.getByRole('button', { name: 'View' }).click();
//   await page.getByLabel('Topbar Menu').getByText('Project Info').click();
//   await page.getByRole('menuitem', { name: 'Customers' }).click();
//   await page.getByRole('listitem').filter({ hasText: 'Attendance' }).click();
//   await page.getByRole('listitem').filter({ hasText: /^Punch In\/Out$/ }).click();
// });