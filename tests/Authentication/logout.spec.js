const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pom/LoginPage');
const DashboardPage = require('../../pom/DashboardPage');

test.describe('OrangeHRM Logout Module', () => {

  let loginPage;
  let dashboardPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);

    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');

    await expect(page).toHaveURL(/dashboard/);
  });

  test('Logout successfully', async ({ page }) => {

    await dashboardPage.logout();

    await expect(page).toHaveURL(/login/);


  });

  test('Logout UI validation', async ({ page }) => {

    await page.click(dashboardPage.profileDropdown);

    await expect(page.locator(dashboardPage.logoutButton)).toBeVisible();

    await page.screenshot({
      path: 'screenshots/auth/logout_ui.png',
      fullPage: true
    });
  });

  test('Session should end after logout', async ({ page }) => {

    await dashboardPage.logout();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    await expect(page).toHaveURL(/login/);

   
  });

});