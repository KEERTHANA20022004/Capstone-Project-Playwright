# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment/candidates.spec.js >> Candidates Tests >> checking the candidate who applied in offline mode
- Location: tests/Recruitment/candidates.spec.js:35:1

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - generic:
      - complementary [ref=e4]:
        - navigation "Sidepanel" [ref=e5]:
          - generic [ref=e6]:
            - link "client brand banner" [ref=e7]:
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
                - link "Admin" [ref=e21]:
                  - /url: /web/index.php/admin/viewAdminModule
                  - generic [ref=e24]: Admin
              - listitem [ref=e25]:
                - link "PIM" [ref=e26]:
                  - /url: /web/index.php/pim/viewPimModule
                  - generic [ref=e40]: PIM
              - listitem [ref=e41]:
                - link "Leave" [ref=e42]:
                  - /url: /web/index.php/leave/viewLeaveModule
                  - generic [ref=e45]: Leave
              - listitem [ref=e46]:
                - link "Time" [ref=e47]:
                  - /url: /web/index.php/time/viewTimeModule
                  - generic [ref=e53]: Time
              - listitem [ref=e54]:
                - link "Recruitment" [ref=e55]:
                  - /url: /web/index.php/recruitment/viewRecruitmentModule
                  - generic [ref=e61]: Recruitment
              - listitem [ref=e62]:
                - link "My Info" [ref=e63]:
                  - /url: /web/index.php/pim/viewMyDetails
                  - generic [ref=e69]: My Info
              - listitem [ref=e70]:
                - link "Performance" [ref=e71]:
                  - /url: /web/index.php/performance/viewPerformanceModule
                  - generic [ref=e79]: Performance
              - listitem [ref=e80]:
                - link "Dashboard" [ref=e81]:
                  - /url: /web/index.php/dashboard/index
                  - generic [ref=e84]: Dashboard
              - listitem [ref=e85]:
                - link "Directory" [ref=e86]:
                  - /url: /web/index.php/directory/viewDirectory
                  - generic [ref=e89]: Directory
              - listitem [ref=e90]:
                - link "Maintenance" [ref=e91]:
                  - /url: /web/index.php/maintenance/viewMaintenanceModule
                  - generic [ref=e95]: Maintenance
              - listitem [ref=e96]:
                - link "Claim" [ref=e97]:
                  - /url: /web/index.php/claim/viewClaimModule
                  - img [ref=e100]
                  - generic [ref=e104]: Claim
              - listitem [ref=e105]:
                - link "Buzz" [ref=e106]:
                  - /url: /web/index.php/buzz/viewBuzz
                  - generic [ref=e109]: Buzz
      - banner [ref=e110]:
        - generic [ref=e111]:
          - generic [ref=e112]:
            - text: 
            - heading "Recruitment" [level=6] [ref=e114]
          - link "Upgrade" [ref=e116]:
            - /url: https://orangehrm.com/open-source/upgrade-to-advanced
            - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
          - list [ref=e123]:
            - listitem [ref=e124]:
              - generic [ref=e125] [cursor=pointer]:
                - img "profile picture" [ref=e126]
                - paragraph [ref=e127]: srini K
                - generic [ref=e128]: 
        - navigation "Topbar Menu" [ref=e130]:
          - list [ref=e131]:
            - listitem [ref=e132] [cursor=pointer]:
              - link "Candidates" [active] [ref=e133]:
                - /url: "#"
            - listitem [ref=e134] [cursor=pointer]:
              - link "Vacancies" [ref=e135]:
                - /url: "#"
            - button "" [ref=e137] [cursor=pointer]:
              - generic [ref=e138]: 
    - generic [ref=e139]:
      - generic [ref=e141]:
        - generic [ref=e142]:
          - generic [ref=e143]:
            - heading "Vacancies" [level=5] [ref=e145]
            - button "" [ref=e148] [cursor=pointer]:
              - generic [ref=e149]: 
          - separator [ref=e150]
          - generic [ref=e152]:
            - generic [ref=e154]:
              - generic [ref=e156]:
                - generic [ref=e158]: Job Title
                - generic [ref=e161] [cursor=pointer]:
                  - generic [ref=e162]: "-- Select --"
                  - generic [ref=e164]: 
              - generic [ref=e166]:
                - generic [ref=e168]: Vacancy
                - generic [ref=e171] [cursor=pointer]:
                  - generic [ref=e172]: "-- Select --"
                  - generic [ref=e174]: 
              - generic [ref=e176]:
                - generic [ref=e178]: Hiring Manager
                - generic [ref=e181] [cursor=pointer]:
                  - generic [ref=e182]: "-- Select --"
                  - generic [ref=e184]: 
              - generic [ref=e186]:
                - generic [ref=e188]: Status
                - generic [ref=e191] [cursor=pointer]:
                  - generic [ref=e192]: "-- Select --"
                  - generic [ref=e194]: 
            - separator [ref=e195]
            - generic [ref=e196]:
              - button "Reset" [ref=e197] [cursor=pointer]
              - button "Search" [ref=e198] [cursor=pointer]
        - generic [ref=e199]:
          - button " Add" [ref=e201] [cursor=pointer]:
            - generic [ref=e202]: 
            - text: Add
          - generic [ref=e203]:
            - separator [ref=e204]
            - generic [ref=e206]: No Records Found
          - table [ref=e208]:
            - rowgroup [ref=e209]:
              - row " Vacancy  Job Title  Hiring Manager  Status  Actions" [ref=e210]:
                - columnheader "" [ref=e211]:
                  - generic [ref=e213] [cursor=pointer]:
                    - checkbox "" [ref=e214]
                    - generic [ref=e216]: 
                - columnheader "Vacancy " [ref=e217]:
                  - text: Vacancy
                  - generic [ref=e218]:
                    - generic [ref=e219] [cursor=pointer]: 
                    - text:  
                - columnheader "Job Title " [ref=e220]:
                  - text: Job Title
                  - generic [ref=e221]:
                    - generic [ref=e222] [cursor=pointer]: 
                    - text:  
                - columnheader "Hiring Manager " [ref=e223]:
                  - text: Hiring Manager
                  - generic [ref=e224]:
                    - generic [ref=e225] [cursor=pointer]: 
                    - text:  
                - columnheader "Status " [ref=e226]:
                  - text: Status
                  - generic [ref=e227]:
                    - generic [ref=e228] [cursor=pointer]: 
                    - text:  
                - columnheader "Actions" [ref=e229]
            - rowgroup
      - generic [ref=e231]:
        - paragraph [ref=e232]: OrangeHRM OS 5.8
        - paragraph [ref=e233]:
          - text: © 2005 - 2026
          - link "OrangeHRM, Inc" [ref=e234]:
            - /url: http://www.orangehrm.com
          - text: . All rights reserved.
  - generic [ref=e235]:
    - generic [ref=e236] [cursor=pointer]:
      - generic [ref=e237]:
        - generic [ref=e240]: 
        - generic [ref=e241]:
          - paragraph [ref=e242]: Error
          - paragraph [ref=e243]: Unexpected Error!
      - button "×" [ref=e245]
    - generic [ref=e246] [cursor=pointer]:
      - generic [ref=e247]:
        - generic [ref=e250]: 
        - generic [ref=e251]:
          - paragraph [ref=e252]: Error
          - paragraph [ref=e253]: Unexpected Error!
      - button "×" [ref=e255]
    - generic [ref=e256] [cursor=pointer]:
      - generic [ref=e257]:
        - generic [ref=e260]: 
        - generic [ref=e261]:
          - paragraph [ref=e262]: Error
          - paragraph [ref=e263]: Unexpected Error!
      - button "×" [ref=e265]
    - generic [ref=e266] [cursor=pointer]:
      - generic [ref=e267]:
        - generic [ref=e270]: 
        - generic [ref=e271]:
          - paragraph [ref=e272]: Error
          - paragraph [ref=e273]: Unexpected Error!
      - button "×" [ref=e275]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const LoginPage = require('../../pom/LoginPage');
  3  | 
  4  | test.describe('Candidates Tests', () => {
  5  |   
  6  | let loginPage;
> 7  | test.beforeEach(async ({ page }) => {
     |      ^ Test timeout of 30000ms exceeded while running "beforeEach" hook.
  8  | page.setDefaultTimeout(60000);
  9  | loginPage = new LoginPage(page);
  10 | await loginPage.goto();
  11 | await loginPage.login('Admin', 'admin123');
  12 | await page.click('span:has-text("Recruitment")');
  13 | await expect(page).toHaveURL(/recruitment/);
  14 | await page.getByRole('link', { name: 'Vacancies' }).click();
  15 | await page.getByRole('link', { name: 'Candidates' }).click();
  16 | });
  17 | test ('checking the candidate who is IT manager', async ({ page }) => {
  18 |       await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
  19 |       await page.getByText('IT Manager').click();
  20 |     
  21 |     });
  22 | 
  23 | test('checking who are shortlisted', async ({ page }) => {
  24 |    await page.getByText('-- Select --').nth(3).click();
  25 |    await page.getByRole('listbox').getByText('Shortlisted').click();
  26 |     
  27 | });
  28 | 
  29 | test('checking the candidate who applied in online mode', async ({ page }) => {
  30 |      await page.getByText('-- Select --').nth(4).click();
  31 |      await page.getByText('Online').click();
  32 |      
  33 | });
  34 | 
  35 | test('checking the candidate who applied in offline mode', async ({ page }) => {
  36 |      await page.getByText('-- Select --').nth(4).click();
  37 |      await page.getByText('Manual').click();
  38 |     
  39 | });
  40 | 
  41 | 
  42 | });
  43 | 
  44 | 
  45 | 
```