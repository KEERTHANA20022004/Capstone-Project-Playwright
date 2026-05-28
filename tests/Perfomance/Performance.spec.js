const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pom/LoginPage');

test.describe('Performance Tests', () => {

  let loginPage;

  test.beforeEach(async ({ page }) => {
    page.setDefaultTimeout(60000);
    loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    await page.getByRole('link', { name: 'Performance' }).click();
    });
    test('Configure Performance', async ({ page }) => {
    await page.getByText('Configure').click();
    await page.getByRole('menuitem', { name: 'KPIs' }).click();
    });
    test(' Configure Trackers', async ({ page }) => {
    await page.getByLabel('Topbar Menu').getByText('Configure').click();
    await page.getByRole('listitem').filter({ hasText: /^Trackers$/ }).click();
    });
    test('MyReviews', async ({ page }) => {
    await page.getByRole('listitem').filter({ hasText: 'Manage Reviews' }).click();
    await page.getByRole('listitem').filter({ hasText: /^My Reviews$/ }).click();
    });
    test('employee Reviews', async ({ page }) => {
    await page.getByRole('listitem').filter({ hasText: 'Manage Reviews' }).click();
    await page.getByRole('listitem').filter({ hasText: /^Employee Reviews$/ }).click();
    });
    test('My Trackers', async ({ page }) => {
    await page.getByRole('listitem').filter({ hasText: 'My Trackers' }).click();
    });
    test('Employee Trackers', async ({ page }) => {
    await page.getByRole('link', { name: 'Employee Trackers' }).click();
    });

});





