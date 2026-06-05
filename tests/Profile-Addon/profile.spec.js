const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pom/LoginPage');

test.describe('profile Tests', () => {
  
let loginPage;
test.beforeEach(async ({ page }) => {

page.setDefaultTimeout(60000);
loginPage = new LoginPage(page);
await loginPage.goto();
await loginPage.login('Admin', 'admin123');
});

test('View Profile', async ({ page }) => {

  await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
  await page.getByRole('menuitem', { name: 'About' }).click();

});

test('View Support', async ({ page }) => {

  await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
  await page.getByRole('menuitem', { name: 'Support' }).click();

});

test('Change Password', async ({ page }) => {

  await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
  await page.getByRole('menuitem', { name: 'Change Password' }).click();
}); 
});


























