const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pom/LoginPage');

test.describe('Dashboard Module Tests', () => {

  let loginPage;

  test.beforeEach(async ({ page }) => {
    page.setDefaultTimeout(60000);
    loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
     await page.getByRole('link', { name: 'Dashboard' }).click();
  });

    test('Widget visibility', async ({ page }) => {
         await page.getByText('Time at Work');
         await page.getByText('My Actions');
         await page.getByText('Quick Launch');
        
    });

    test('Role-based dashboard check', async ({ page }) => {
        await page.getByText('Employee Distribution by Subunit');
        await page.getByText('Human Resources').click();
        await page.getByText('Unassigned').first().click();
           
    });
    test('Help menu- Admin User Guide', async ({ page }) => {
        const page2Promise = page.waitForEvent('popup');
        await page.getByTitle('Help').click();
        const page2 = await page2Promise;
        await page2.getByRole('link', { name: 'Admin User Guide' }).click();
    });
    test('Help menu - Employee User Guide', async ({ page }) => {
        const page2Promise = page.waitForEvent('popup');
        await page.getByTitle('Help').click();
        const page2 = await page2Promise;
        await page2.getByRole('link', { name: 'Employee User Guide' }).click();
    });
    test('Help menu - Mobile App', async ({ page }) => {
        const page2Promise = page.waitForEvent('popup');
        await page.getByTitle('Help').click();
        const page2 = await page2Promise;
        await page2.getByRole('link', { name: 'Mobile App' }).click();
    });
    test('Help menu - AWS Guide', async ({ page }) => {
        const page2Promise = page.waitForEvent('popup');
        await page.getByTitle('Help').click();
        const page2 = await page2Promise;
        await page2.getByRole('link', { name: 'AWS Guide' }).click();
    });
    test('Help menu - FAQs', async ({ page }) => {
        const page2Promise = page.waitForEvent('popup');
        await page.getByTitle('Help').click();
        const page2 = await page2Promise;
        await page2.getByRole('link', { name: 'FAQs' }).click();
    });
    test('Employee Distribution by Location', async ({ page }) => {
        await page.getByText('Employee Distribution by Location').click();
         await page.getByText('Texas R&D').click();
         await page.getByText('Unassigned').nth(1).click();
    });
    test('Employees on Leave Today', async ({ page }) => {
       await page.getByText('Employees on Leave Today').click();
         await page.locator('.oxd-icon.bi-gear-fill').click();
    });
    test('Quick Launch - Assign Leave', async ({ page }) => {
        await page.getByText('Quick Launch').click();
        await page.getByRole('button', { name: 'Assign Leave' }).click();
    });
    test('Quick Launch - Leave List', async ({ page }) => {
        await page.getByText('Quick Launch').click();
        await page.getByRole('button', { name: 'Leave List' }).click();
    });
    test('Quick Launch - Timesheets', async ({ page }) => {
        await page.getByText('Quick Launch').click();
        await page.getByRole('button', { name: 'Timesheets' }).click();
    });

  });

