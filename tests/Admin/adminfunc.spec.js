const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pom/LoginPage');

test.describe('Admin functionality Tests', () => {

  let loginPage;

  test.beforeEach(async ({ page }) => {
    page.setDefaultTimeout(60000);
    loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    await page.getByRole('link', { name: 'Admin' }).click();  
  });
  test('Corporate Branding ', async ({ page }) => {
    await page.getByRole('link', { name: 'Corporate Branding' }).click();
    await page.getByRole('button', { name: 'Preview' }).click();
  }); 

test('membership', async ({ page }) => {
    await page.getByLabel('Topbar Menu').getByText('Qualifications').click();
  await page.getByRole('menuitem', { name: 'Memberships' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/membership');
});
test('licences of employee', async ({ page }) => {
    await page.getByLabel('Topbar Menu').getByText('Qualifications').click();
  await page.getByRole('menuitem', { name: 'Licenses' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/license');
});
});

