const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pom/LoginPage');

test.describe('profile Tests', () => {
  
let loginPage;
test.beforeEach(async ({ page }) => {

page.setDefaultTimeout(60000);
loginPage = new LoginPage(page);
await loginPage.goto();
await loginPage.login('Admin', 'admin123');
await page.getByRole('link', { name: 'My Info' }).click();
});
test('My Info', async ({ page }) => {
    await page.getByRole('link', { name: 'Personal Details' }).click();  
});

test('Salary', async ({ page }) => {
    await page.getByRole('link', { name: 'Salary' }).click();   
});
test('Dependents', async ({ page }) => {
    await page.getByRole('link', { name: 'Dependents' }).click();   
    await page.getByRole('button', { name: ' Add' }).nth(1).click();});

test('Emergency Contacts', async ({ page }) => {
    await page.getByRole('link', { name: 'Emergency Contacts' }).click();   });

test('Report-to', async ({ page }) => {
    await page.getByRole('link', { name: 'Report-to' }).click();   });

test('Memberships', async ({ page }) => {
    await page.getByRole('link', { name: 'Memberships' }).click();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewMemberships/empNumber/7');
    await page.getByRole('button', { name: ' Add' }).first().click();   });
});


