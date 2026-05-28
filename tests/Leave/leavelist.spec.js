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
await page.waitForTimeout(3000);

});


test('Verify Search button visible', async ({ page }) => {

await expect(
page.getByRole('button', { name: 'Search' })
).toBeVisible();


});

test('Verify Reset button visible', async ({ page }) => {

await expect(
page.getByRole('button', { name: 'Reset' })
).toBeVisible();



});

test('Verify Employee Name field visible', async ({ page }) => {

await expect(
page.locator('input[placeholder="Type for hints..."]')
).toBeVisible();



});

test('Verify Leave Type dropdown visible', async ({ page }) => {

await expect(
page.locator('.oxd-select-text').first()
).toBeVisible();


});


});