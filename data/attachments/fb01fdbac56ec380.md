# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Time/Attendancetime.spec.js >> Time Tests >> configuration with time check 
- Location: tests/Time/Attendancetime.spec.js:20:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Save' })
    - waiting for" https://opensource-demo.orangehrmlive.com/web/index.php/attendance/configure" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/attendance/configure"
    - locator resolved to <button type="submit" data-v-10d463b7="" data-v-77c6da4e="" class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-v-d5bfe35b="" class="oxd-form-loader">…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-v-d5bfe35b="" class="oxd-form-loader">…</div> intercepts pointer events
    - retrying click action
      - waiting 100ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-v-d5bfe35b="" class="oxd-form-loader">…</div> intercepts pointer events
    - retrying click action
      - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - generic [ref=e113]:
            - heading "Attendance" [level=6] [ref=e114]
            - heading "/ Attendance" [level=6] [ref=e115]
        - link "Upgrade" [ref=e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e118] [cursor=pointer]: Upgrade
        - list [ref=e124]:
          - listitem [ref=e125]:
            - generic [ref=e126] [cursor=pointer]:
              - img "profile picture" [ref=e127]
              - paragraph [ref=e128]: srini K
              - generic [ref=e129]: 
      - navigation "Topbar Menu" [ref=e131]:
        - list [ref=e132]:
          - listitem [ref=e133] [cursor=pointer]:
            - generic [ref=e134]:
              - text: Timesheets
              - generic [ref=e135]: 
          - listitem [ref=e136] [cursor=pointer]:
            - generic [ref=e137]:
              - text: Attendance
              - generic [ref=e138]: 
          - listitem [ref=e139] [cursor=pointer]:
            - generic [ref=e140]:
              - text: Reports
              - generic [ref=e141]: 
          - listitem [ref=e142] [cursor=pointer]:
            - generic [ref=e143]:
              - text: Project Info
              - generic [ref=e144]: 
          - button "" [ref=e146] [cursor=pointer]:
            - generic [ref=e147]: 
  - generic [ref=e148]:
    - generic [ref=e151]:
      - heading "Attendance Configuration" [level=6] [ref=e152]
      - separator [ref=e153]
      - generic [ref=e154]:
        - generic [ref=e159]:
          - generic [ref=e160]:
            - paragraph [ref=e161]: Employee can change current time when punching in/out
            - checkbox [ref=e164]
          - generic [ref=e166]:
            - paragraph [ref=e167]: Employee can edit/delete own attendance records
            - checkbox [ref=e170]
          - generic [ref=e172]:
            - paragraph [ref=e173]: Supervisor can add/edit/delete attendance records of subordinates
            - checkbox [ref=e176]
        - separator [ref=e178]
        - button "Save" [ref=e180] [cursor=pointer]
    - generic [ref=e181]:
      - paragraph [ref=e182]: OrangeHRM OS 5.8
      - paragraph [ref=e183]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e184] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const LoginPage = require('../../pom/LoginPage');
  3  | 
  4  | test.describe('Time Tests', () => {
  5  | let loginPage;
  6  | 
  7  | test.beforeEach(async ({ page }) => {
  8  | page.setDefaultTimeout(60000);
  9  | loginPage = new LoginPage(page);
  10 | await loginPage.goto();
  11 | await loginPage.login('Admin', 'admin123');
  12 | await page.getByRole('link', { name: 'Time' }).click();
  13 | await page.getByLabel('Topbar Menu').getByText('Attendance').click();
  14 | });
  15 | 
  16 | test('My Records with time check ', async ({ page }) => {
  17 |     await page.getByRole('menuitem', { name: 'My Records' }).click();
  18 |     await page.locator('form').getByRole('button', { name: 'View' }).click();
  19 | });
  20 | test('configuration with time check ', async ({ page }) => {
  21 |     await page.getByRole('menuitem', { name: 'Configuration' }).click();
> 22 |     await page.getByRole('button', { name: 'Save' }).click();
     |                                                      ^ Error: locator.click: Test timeout of 30000ms exceeded.
  23 | });
  24 | 
  25 | test('employee attendance record check ', async ({ page }) => {
  26 |             await page.getByRole('menuitem', { name: 'Employee Records' }).click();
  27 |             await page.locator('form').getByRole('button', { name: 'View' }).click();
  28 | });
  29 | test('punch in/out with time check ', async ({ page }) => {
  30 |     await page.getByRole('menuitem', { name: 'Punch In/Out' }).click();
  31 | });
  32 | 
  33 | });
  34 | 
  35 | 
  36 | 
  37 | 
```