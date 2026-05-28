const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pom/LoginPage');

test.describe('Admin Tests', () => {

  let loginPage;

  test.beforeEach(async ({ page }) => {
    page.setDefaultTimeout(60000);
    loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    await page.getByRole('link', { name: 'Admin' }).click();  
  });

    test('Open Admin module', async ({ page }) => {
    await page.getByRole('link', { name: 'Admin' }).click();  
});

    test('Search for user', async ({ page }) => { 
    await page.getByRole('textbox').nth(1).fill('Mandaa user');
    await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
    await page.getByRole('button', { name: 'Search' }).click();
});
    test('Add user', async ({ page }) => {
    await page.getByRole('button', { name: ' Add' }).click();
});
    test('Open Nationalities page', async ({ page }) => {
    await page.getByRole('link', { name: 'Nationalities' }).click();
});
    test('to know about work shifts', async ({ page }) => {
    await page.getByText('Job').click();
    await page.getByRole('menuitem', { name: 'Work Shifts' }).click();
});
});




// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByRole('link', { name: 'Admin' }).click();
//   await page.getByRole('textbox').nth(1).click();
//   await page.getByRole('textbox').nth(1).press('CapsLock');
//   await page.getByRole('textbox').nth(1).fill('M');
//   await page.getByRole('textbox').nth(1).press('CapsLock');
//   await page.getByRole('textbox').nth(1).fill('Mandaa user');
//   await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
//   await page.getByRole('option', { name: 'ESS' }).click();
//   await page.getByRole('textbox', { name: 'Type for hints...' }).click();
//   await page.getByRole('textbox', { name: 'Type for hints...' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Type for hints...' }).fill('M');
//   await page.getByRole('textbox', { name: 'Type for hints...' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Mandaa user');
//   await page.locator('div:nth-child(4) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
//   await page.getByRole('option', { name: 'Enabled' }).click();
//   await page.getByRole('button', { name: 'Search' }).click();
//   await page.getByRole('button', { name: ' Add' }).click();
//   await page.getByRole('button').filter({ hasText: /^$/ }).nth(4).click();
//   await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).click();
// });

//   await page.getByRole('button', { name: ' Add' }).click();
//   await page.getByRole('button').filter({ hasText: /^$/ }).nth(4).click();
//   await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).click();
//   await page.getByRole('link', { name: 'Nationalities' }).click();
//   await page.getByText('Job').click();
//   await page.getByRole('menuitem', { name: 'Work Shifts' }).click();
//   await page.getByText('Organization').click();
//   await page.locator('.--active > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
//   await page.getByRole('menuitem', { name: 'Locations' }).click();
//   await page.getByText('Configuration').click();
//   await page.getByRole('menuitem', { name: 'Email Subscriptions' }).click();
// });

