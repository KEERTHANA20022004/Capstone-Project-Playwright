const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pom/LoginPage');
const DashboardPage = require('../../pom/DashboardPage');

test.describe('OrangeHRM Authentication', () => {

  let loginPage;
  let dashboardPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    await loginPage.goto();
  });

  test(' Login with valid credentials', async ({ page }) => {
    await loginPage.login('Admin', 'admin123');

    await expect(page).toHaveURL(/dashboard/);
    await expect(page.locator('h6')).toHaveText('Dashboard');
   
});


  test('Login with invalid password', async ({ page }) => {
    await loginPage.login('Admin', 'wrongpass');

    await expect(page.locator('.oxd-alert-content-text'))
      .toContainText('Invalid credentials');
     

  });

  test('Login with invalid username', async ({ page }) => {
    await loginPage.login('WrongUser', 'admin123');

    await expect(page.locator('.oxd-alert-content-text'))
      .toContainText('Invalid credentials');
   
  });

  test(' Login with empty fields', async ({ page }) => {
    await loginPage.login('', '');

   await expect(page.locator('.oxd-input-field-error-message').first())
  .toHaveText('Required');
    
  });

  test(' Login with empty username', async ({ page }) => {
    await loginPage.login('', 'admin123');

    await expect(page.locator('.oxd-input-field-error-message'))
      .toContainText('Required');
    
  });

  test(' Login with empty password', async ({ page }) => {
    await loginPage.login('Admin', '');

    await expect(page.locator('.oxd-input-field-error-message'))
      .toContainText('Required');
      
    });


  test(' Verify login page UI elements', async ({ page }) => {
    await expect(page.locator('input[name="username"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
    
   
  });

  test(' Login and Logout flow', async ({ page }) => {
    await loginPage.login('Admin', 'admin123');
    await expect(page).toHaveURL(/dashboard/);
    await dashboardPage.logout();
    await expect(page).toHaveURL(/login/);
   
  });

  test('Prevent access to dashboard without login', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    await expect(page).toHaveURL(/login/);
    
  });

});