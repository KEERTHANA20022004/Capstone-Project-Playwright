const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pom/LoginPage');

test.describe('Time Tests', () => {
let loginPage;

test.beforeEach(async ({ page }) => {
page.setDefaultTimeout(60000);
loginPage = new LoginPage(page);
await loginPage.goto();
await loginPage.login('Admin', 'admin123');
await page.getByRole('link', { name: 'Time' }).click();
await page.getByLabel('Topbar Menu').getByText('Attendance').click();
});

test('My Records with time check ', async ({ page }) => {
    await page.getByRole('menuitem', { name: 'My Records' }).click();
    await page.locator('form').getByRole('button', { name: 'View' }).click();
});
test('configuration with time check ', async ({ page }) => {
    await page.getByRole('menuitem', { name: 'Configuration' }).click();
    await page.getByRole('button', { name: 'Save' }).click();
});

test('employee attendance record check ', async ({ page }) => {
            await page.getByRole('menuitem', { name: 'Employee Records' }).click();
            await page.locator('form').getByRole('button', { name: 'View' }).click();
});
test('punch in/out with time check ', async ({ page }) => {
    await page.getByRole('menuitem', { name: 'Punch In/Out' }).click();
});

});



