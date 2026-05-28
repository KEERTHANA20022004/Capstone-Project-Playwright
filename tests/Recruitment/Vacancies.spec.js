const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pom/LoginPage');

test.describe('Vacancies Tests', () => {
  
let loginPage;
test.beforeEach(async ({ page }) => {
page.setDefaultTimeout(60000);
loginPage = new LoginPage(page);
await loginPage.goto();
await loginPage.login('Admin', 'admin123');
await page.click('span:has-text("Recruitment")');
await expect(page).toHaveURL(/recruitment/);
await page.getByRole('link', { name: 'Vacancies' }).click();
});


test('Checking the role software engineer', async ({ page }) => {
  await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();

await page.locator('div[role="listbox"] span')
  .filter({ hasText: 'Software Engineer' })
  .click();
  
});

test('Checking the status', async ({ page }) => {
  
   await page.getByText('-- Select --').nth(3).click();
   await page.getByRole('listbox').getByText('Active').click();

 
 
});

test('Checking the name of the hiring manager', async ({ page }) => {
   
  await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').nth(2).click();
  
});

test('add button', async ({ page }) => {
  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page).toHaveURL(/addJobVacancy/);
  
});


});
