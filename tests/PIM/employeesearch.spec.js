// tests/PIM/employeesearch.spec.js

const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pom/LoginPage');
const PIMPage = require('../../pom/PIMPage');

test.describe('PIM - Employee Search', () => {

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

  test('Search employee by name', async ({ page }) => {

    await pimPage.searchEmployeeByName('John');

    await expect(
      page.locator('.oxd-table-body')
    ).toBeVisible();

    await page.screenshot({
      path: 'screenshots/PIM/searchEmployeeByName.png',
      fullPage: true
    });
  });

  test('Verify employee list page opens', async ({ page }) => {

    await expect(page).toHaveURL(/viewEmployeeList/);

    await expect(
      page.locator('h5')
    ).toContainText('Employee Information');

    await page.screenshot({
      path: 'screenshots/PIM/employeeListPage.png',
      fullPage: true
    });
  });

  test('Search employee with empty data', async ({ page }) => {

    await page.click('button[type="submit"]');

    await expect(
      page.locator('.oxd-table-body')
    ).toBeVisible();

  
  });

  test('Verify employee search field visible', async ({ page }) => {

    await expect(
      page.locator('(//input[@placeholder="Type for hints..."])[1]')
    ).toBeVisible();


  });
test('Reset employee search fields', async ({ page }) => {

  await page.fill(
    '(//input[@placeholder="Type for hints..."])[1]',
    'John'
  );

  await page.click('button:has-text("Reset")');

  await expect(
    page.locator('(//input[@placeholder="Type for hints..."])[1]')
  ).toHaveValue('');

  await page.screenshot({
    path: 'screenshots/PIM/resetSearchFields.png',
    fullPage: true
  });
});

test('Verify search button visible', async ({ page }) => {

  await expect(
    page.locator('button[type="submit"]')
  ).toBeVisible();

  await page.screenshot({
    path: 'screenshots/PIM/searchButtonVisible.png',
    fullPage: true
  });
});

test('Verify reset button visible', async ({ page }) => {

  await expect(
    page.locator('button:has-text("Reset")')
  ).toBeVisible();

  await page.screenshot({
    path: 'screenshots/PIM/resetButtonVisible.png',
    fullPage: true
  });
});

test('Verify employee table visible', async ({ page }) => {

  await expect(
    page.locator('.oxd-table')
  ).toBeVisible();

  await page.screenshot({
    path: 'screenshots/PIM/employeeTableVisible.png',
    fullPage: true
  });
});

test('Search employee using partial name', async ({ page }) => {

  await pimPage.searchEmployeeByName('Jo');

  await expect(
    page.locator('.oxd-table-body')
  ).toBeVisible();

  await page.screenshot({
    path: 'screenshots/PIM/partialNameSearch.png',
    fullPage: true
  });
});

});