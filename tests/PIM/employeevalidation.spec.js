const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pom/LoginPage');
const PIMPage = require('../../pom/PIMPage');

test.describe('PIM - Employee Validation Tests', () => {

  let loginPage;
  let pimPage;

  test.beforeEach(async ({ page }) => {

    page.setDefaultTimeout(60000);

    loginPage = new LoginPage(page);
    pimPage = new PIMPage(page);

    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');

    await pimPage.openPIM();
  });

  test('Verify Add Employee page loads correctly', async ({ page }) => {

    await page.click('a:has-text("Add Employee")');

    await expect(
      page.getByRole('heading', { name: 'Add Employee' })
    ).toBeVisible();

    await expect(page.locator('input[name="firstName"]')).toBeVisible();
    await expect(page.locator('input[name="lastName"]')).toBeVisible();

    await page.screenshot({
      path: 'screenshots/PIM/validation_addEmployee_page.png',
      fullPage: true
    });
  });

  test('Validate required fields on submit', async ({ page }) => {

    await page.click('a:has-text("Add Employee")');

    await page.click('button[type="submit"]');

    await expect(
      page.getByText('Required', { exact: true }).first()
    ).toBeVisible();

    await page.screenshot({
      path: 'screenshots/PIM/validation_required_fields.png',
      fullPage: true
    });
  });

  test('Verify Cancel button returns to PIM page', async ({ page }) => {

    await page.click('a:has-text("Add Employee")');

    await page.click('button:has-text("Cancel")');

    await expect(
      page.getByRole('heading', { name: 'PIM' })
    ).toBeVisible();

    await expect(page).toHaveURL(/viewEmployeeList/);

    await page.screenshot({
      path: 'screenshots/PIM/validation_cancel.png',
      fullPage: true
    });
  });

  


});