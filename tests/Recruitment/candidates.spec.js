const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pom/LoginPage');

test.describe('Candidates Tests', () => {
  
let loginPage;
test.beforeEach(async ({ page }) => {
page.setDefaultTimeout(60000);
loginPage = new LoginPage(page);
await loginPage.goto();
await loginPage.login('Admin', 'admin123');
await page.click('span:has-text("Recruitment")');
await expect(page).toHaveURL(/recruitment/);
await page.getByRole('link', { name: 'Vacancies' }).click();
await page.getByRole('link', { name: 'Candidates' }).click();
});
test ('checking the candidate who is IT manager', async ({ page }) => {
      await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
      await page.getByText('IT Manager').click();
    
    });

test('checking who are shortlisted', async ({ page }) => {
   await page.getByText('-- Select --').nth(3).click();
   await page.getByRole('listbox').getByText('Shortlisted').click();
    
});

test('checking the candidate who applied in online mode', async ({ page }) => {
     await page.getByText('-- Select --').nth(4).click();
     await page.getByText('Online').click();
     
});

test('checking the candidate who applied in offline mode', async ({ page }) => {
     await page.getByText('-- Select --').nth(4).click();
     await page.getByText('Manual').click();
    
});


});


