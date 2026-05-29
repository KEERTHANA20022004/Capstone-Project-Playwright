# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Profile/myinfo.spec.js >> profile Tests >> Memberships
- Location: tests/Profile/myinfo.spec.js:37:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: ' Add' }).first()

```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const LoginPage = require('../../pom/LoginPage');
  3  | 
  4  | test.describe('profile Tests', () => {
  5  |   
  6  | let loginPage;
  7  | test.beforeEach(async ({ page }) => {
  8  | 
  9  | page.setDefaultTimeout(60000);
  10 | loginPage = new LoginPage(page);
  11 | await loginPage.goto();
  12 | await loginPage.login('Admin', 'admin123');
  13 | await page.getByRole('link', { name: 'My Info' }).click();
  14 | });
  15 | test('My Info', async ({ page }) => {
  16 |     await page.getByRole('link', { name: 'Personal Details' }).click();  
  17 | });
  18 | 
  19 | test('Salary', async ({ page }) => {
  20 |     await page.getByRole('link', { name: 'Salary' }).click();   
  21 | });
  22 | 
  23 | test('Tax Exemptions', async ({ page }) => {
  24 |     await page.getByRole('link', { name: 'Tax Exemptions' }).click();   
  25 | });
  26 | 
  27 | test('Dependents', async ({ page }) => {
  28 |     await page.getByRole('link', { name: 'Dependents' }).click();   
  29 |     await page.getByRole('button', { name: ' Add' }).nth(1).click();});
  30 | 
  31 | test('Emergency Contacts', async ({ page }) => {
  32 |     await page.getByRole('link', { name: 'Emergency Contacts' }).click();   });
  33 | 
  34 | test('Report-to', async ({ page }) => {
  35 |     await page.getByRole('link', { name: 'Report-to' }).click();   });
  36 | 
  37 | test('Memberships', async ({ page }) => {
  38 |     await page.getByRole('link', { name: 'Memberships' }).click();
  39 |     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewMemberships/empNumber/7');
> 40 |     await page.getByRole('button', { name: ' Add' }).first().click();   });
     |                                                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
  41 | });
  42 | 
```