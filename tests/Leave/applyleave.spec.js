const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pom/LoginPage');

test.describe('Apply Leave Tests', () => {
  
let loginPage;
test.beforeEach(async ({ page }) => {

page.setDefaultTimeout(60000);
loginPage = new LoginPage(page);
await loginPage.goto();
await loginPage.login('Admin', 'admin123');
await page.click('span:has-text("Leave")');
await expect(page).toHaveURL(/leave/);


});

test('Apply Leave', async ({ page }) => {
await page.getByRole('link', { name: 'Apply' }).click();
await expect(page).toHaveURL(/applyLeave/);

});
test('Verify Leave Type dropdown visible', async ({ page }) => {
await page.getByRole('link', { name: 'Apply' }).click();

await expect(
page.locator('.oxd-select-text').first()
).toBeVisible();

});

test('Approved leave ', async ({ page }) => { 
     await page.getByRole('link', { name: 'My Leave' }).click();
   await page.getByText('Select', { exact: true }).click();
   await page.getByRole('option', { name: 'Scheduled' }).click();   
   
});

test('Rejected leave ', async ({ page }) => { 
     await page.getByRole('link', { name: 'My Leave' }).click();
   await page.getByText('Select', { exact: true }).click();
   await page.getByRole('option', { name: 'Rejected' }).click();   
   
});
test('leave history ', async ({ page }) => {
     await page.getByRole('listitem').filter({ hasText: 'Leave List' }).click();
     
    });

test('workweeks check', async ({ page }) => {
    await page.getByText('Configure').click();
    await page.getByRole('menuitem', { name: 'Work Week' }).click();
});
test('leave period check', async ({ page }) => {
    await page.getByText('Configure').click();
    await page.getByRole('menuitem', { name: 'Leave Period' }).click();
});
test('leave types check', async ({ page }) => {
    await page.getByText('Configure').click();
    await page.getByRole('menuitem', { name: 'Leave Types' }).click();
});
test('holiday check', async ({ page }) => {
    await page.getByText('Configure').click();
    await page.getByRole('menuitem', { name: 'Holidays' }).click();
});

});

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByText('Attendance').click();
//   await page.getByRole('menuitem', { name: 'Employee Records' }).click();
//   await page.getByText('Project Info').click();
//   await page.getByRole('menuitem', { name: 'Projects' }).click();
//   await page.getByLabel('Topbar Menu').getByText('Configure').click();
//   await page.getByRole('menuitem', { name: 'Leave Types' }).click();
//   await page.getByLabel('Topbar Menu').getByText('Configure').click();
//   await page.getByRole('menuitem', { name: 'Leave Period' }).click();
//   await page.getByLabel('Topbar Menu').getByText('Configure').click();
//   await page.getByRole('listitem').filter({ hasText: /^Work Week$/ }).click();
// });