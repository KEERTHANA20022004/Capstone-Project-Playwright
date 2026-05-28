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
     await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  });

  test('Job Titles', async ({ page }) => {
    await page.getByRole('menuitem', { name: 'Job Titles' }).click();
    await page.getByRole('button', { name: 'Add' }).click();
  });

    test('Pay Grades', async ({ page }) => {
    await page.getByRole('menuitem', { name: 'Pay Grades' }).click();
    await page.getByRole('button', { name: 'Add' }).click();
  });

  test('Employment Status', async ({ page }) => {
        await page.getByRole('menuitem', { name: 'Employment Status' }).click();
  });   

    test('Job Categories', async ({ page }) => {
    await page.getByRole('menuitem', { name: 'Job Categories' }).click();   
  });

  test('Work Shifts', async ({ page }) => {
    await page.getByRole('menuitem', { name: 'Work Shifts' }).click();
    await page.getByRole('button', { name: 'Add' }).click();
  });


});