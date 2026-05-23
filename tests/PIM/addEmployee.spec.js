// tests/PIM/addEmployee.spec.js

const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pom/LoginPage');
const PIMPage = require('../../pom/PIMPage');

test.describe('PIM - Add Employee', () => {

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

  test('Add employee successfully', async ({ page }) => {

    await page.click('a:has-text("Add Employee")');

    await page.fill('input[name="firstName"]', 'John');
    await page.fill('input[name="middleName"]', 'David');
    await page.fill('input[name="lastName"]', 'Smith');

    await page.click('button[type="submit"]');

await expect(page.locator('.oxd-toast')).toContainText('Successfully Saved');

await page.screenshot({
  path: 'screenshots/PIM/addEmployee_success.png',
  fullPage: true
});
  });
 

test('Verify Add Employee page fields visible', async ({ page }) => {

  await page.click('a:has-text("Add Employee")');

  await expect(page.locator('input[name="firstName"]')).toBeVisible();
  await expect(page.locator('input[name="middleName"]')).toBeVisible();
  await expect(page.locator('input[name="lastName"]')).toBeVisible();


});

test('Verify Cancel button navigates back', async ({ page }) => {

  await page.click('a:has-text("Add Employee")');
  await page.click('button:has-text("Cancel")');

  await expect(page.locator('h6')).toContainText('PIM');

  await page.screenshot({
    path: 'screenshots/PIM/cancel_navigation.png',
    fullPage: true
  });
});
test('Add employee with only first name (negative case)', async ({ page }) => {

  await page.click('a:has-text("Add Employee")');

  await page.fill('input[name="firstName"]', 'John');

  await page.click('button[type="submit"]');

  await expect(
    page.getByText('Required', { exact: true }).first()
  ).toBeVisible();

  await page.screenshot({
    path: 'screenshots/PIM/onlyFirstName_validation.png',
    fullPage: true
  });
});

 


  test('Cancel add employee form', async ({ page }) => {

    await page.click('a:has-text("Add Employee")');
    await page.click('button:has-text("Cancel")');

  

    
  });

});