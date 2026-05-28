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


// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByRole('textbox', { name: 'Username' }).click();
//   await page.getByRole('link', { name: 'My Info' }).click();
//   await page.getByRole('link', { name: 'Personal Details' }).click();
//   await page.getByRole('link', { name: 'Salary' }).click();
//   await page.getByRole('link', { name: 'Tax Exemptions' }).click();
//   await page.getByRole('link', { name: 'Dependents' }).click();
//   await page.getByRole('button', { name: ' Add' }).nth(1).click();
//   await page.getByRole('link', { name: 'Emergency Contacts' }).click();
//   await page.getByRole('link', { name: 'Report-to' }).click();
//   await page.getByRole('link', { name: 'Qualifications' }).click();
//   await page.getByRole('link', { name: 'Memberships' }).click();
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewMemberships/empNumber/7');
//   await page.getByRole('button', { name: ' Add' }).first().click();
// });

//   await page.getByRole('link', { name: 'Performance' }).click();
//   await page.getByText('Configure').click();
//   await page.getByRole('menuitem', { name: 'KPIs' }).click();
//   await page.getByLabel('Topbar Menu').getByText('Configure').click();
//   await page.getByRole('listitem').filter({ hasText: /^Trackers$/ }).click();
//   await page.getByRole('listitem').filter({ hasText: 'Manage Reviews' }).click();
//   await page.getByRole('listitem').filter({ hasText: /^My Reviews$/ }).click();
//   await page.getByRole('listitem').filter({ hasText: 'My Trackers' }).click();
//   await page.getByRole('link', { name: 'Employee Trackers' }).click();
// });




























// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
//   await page.getByRole('menuitem', { name: 'About' }).click();
//   await page.getByRole('listitem').filter({ hasText: 'mandaa user' }).locator('i').click();
//   await page.getByRole('menuitem', { name: 'Support' }).click();
//   await page.locator('span').filter({ hasText: 'mandaa user' }).click();
//   await page.getByRole('menuitem', { name: 'Change Password' }).click();
// });