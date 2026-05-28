const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pom/LoginPage');

test.describe('Leave Module Tests', () => {

  let loginPage;

  test.beforeEach(async ({ page }) => {
    page.setDefaultTimeout(60000);
    loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
  });

  test('Open Leave module', async ({ page }) => {

    await page.click('span:has-text("Leave")');

    await expect(page).toHaveURL(/leave/);

   
  });



  test('Verify Apply button visible', async ({ page }) => {

    await page.click('span:has-text("Leave")');

    await expect(
      page.getByRole('link', { name: 'Apply' })
    ).toBeVisible();

  
  });

  test('Open Apply Leave page', async ({ page }) => {

    await page.click('span:has-text("Leave")');

    await page.getByRole('link', { name: 'Apply' }).click();

    await expect(page).toHaveURL(/applyLeave/);

    
  });

  test('Verify Leave List page visible', async ({ page }) => {

    await page.click('span:has-text("Leave")');

    await expect(
      page.getByRole('link', { name: 'Leave List' })
    ).toBeVisible();

  
  });

});