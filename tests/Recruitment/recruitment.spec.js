const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pom/LoginPage');

test.describe('Recruitment Tests', () => {
let loginPage;

test.beforeEach(async ({ page }) => {
page.setDefaultTimeout(60000);
loginPage = new LoginPage(page);
await loginPage.goto();
await loginPage.login('Admin', 'admin123');
await page.getByText('Recruitment').click();
});

test('Verify Recruitment tab', async ({ page }) => {
await expect(page).toHaveURL(/recruitment/);

});

test('Verify Vacancies tab', async ({ page }) => {
await page.getByRole('link', { name: 'Vacancies' }).click();

});

test('Verify Candidates tab', async ({ page }) => {
await page.getByRole('link', { name: 'Candidates' }).click();


});
});