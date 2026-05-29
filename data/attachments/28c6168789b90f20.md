# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Profile/myinfo.spec.js >> profile Tests >> Tax Exemptions
- Location: tests/Profile/myinfo.spec.js:23:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Tax Exemptions' })

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
          - heading "PIM" [level=6] [ref=e114]
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
          - button "" [ref=e133] [cursor=pointer]:
            - generic [ref=e134]: 
  - generic [ref=e135]:
    - generic [ref=e139]:
      - generic [ref=e140]:
        - generic [ref=e141]:
          - heading "srini K" [level=6] [ref=e143]
          - img "profile picture" [ref=e146] [cursor=pointer]
        - tablist [ref=e147]:
          - tab "Personal Details" [ref=e148]:
            - link "Personal Details" [ref=e149] [cursor=pointer]:
              - /url: /web/index.php/pim/viewPersonalDetails/empNumber/7
          - tab "Contact Details" [ref=e150]:
            - link "Contact Details" [ref=e151] [cursor=pointer]:
              - /url: /web/index.php/pim/contactDetails/empNumber/7
          - tab "Emergency Contacts" [ref=e152]:
            - link "Emergency Contacts" [ref=e153] [cursor=pointer]:
              - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/7
          - tab "Dependents" [ref=e154]:
            - link "Dependents" [ref=e155] [cursor=pointer]:
              - /url: /web/index.php/pim/viewDependents/empNumber/7
          - tab "Immigration" [ref=e156]:
            - link "Immigration" [ref=e157] [cursor=pointer]:
              - /url: /web/index.php/pim/viewImmigration/empNumber/7
          - tab "Job" [ref=e158]:
            - link "Job" [ref=e159] [cursor=pointer]:
              - /url: /web/index.php/pim/viewJobDetails/empNumber/7
          - tab "Salary" [ref=e160]:
            - link "Salary" [ref=e161] [cursor=pointer]:
              - /url: /web/index.php/pim/viewSalaryList/empNumber/7
          - tab "Report-to" [ref=e162]:
            - link "Report-to" [ref=e163] [cursor=pointer]:
              - /url: /web/index.php/pim/viewReportToDetails/empNumber/7
          - tab "Qualifications" [ref=e164]:
            - link "Qualifications" [ref=e165] [cursor=pointer]:
              - /url: /web/index.php/pim/viewQualifications/empNumber/7
          - tab "Memberships" [ref=e166]:
            - link "Memberships" [ref=e167] [cursor=pointer]:
              - /url: /web/index.php/pim/viewMemberships/empNumber/7
      - generic [ref=e168]:
        - generic [ref=e169]:
          - heading "Personal Details" [level=6] [ref=e170]
          - separator [ref=e171]
          - generic [ref=e172]:
            - generic [ref=e176]:
              - generic [ref=e178]: Employee Full Name*
              - generic [ref=e179]:
                - textbox "First Name" [ref=e182]: srini
                - textbox "Middle Name" [ref=e185]: Vasan
                - textbox "Last Name" [ref=e188]: K
            - separator [ref=e189]
            - generic [ref=e190]:
              - generic [ref=e191]:
                - generic [ref=e193]:
                  - generic [ref=e195]: Employee Id
                  - textbox [ref=e197]: muser
                - generic [ref=e199]:
                  - generic [ref=e201]: Other Id
                  - textbox [ref=e203]: "4957589"
              - generic [ref=e204]:
                - generic [ref=e206]:
                  - generic [ref=e208]: Driver's License Number
                  - textbox [ref=e210]: "56788"
                - generic [ref=e212]:
                  - generic [ref=e214]: License Expiry Date
                  - generic [ref=e217]:
                    - textbox "yyyy-dd-mm" [ref=e218]: 2023-18-10
                    - generic [ref=e219] [cursor=pointer]: 
            - separator [ref=e220]
            - generic [ref=e221]:
              - generic [ref=e222]:
                - generic [ref=e224]:
                  - generic [ref=e226]: Nationality
                  - generic [ref=e229] [cursor=pointer]:
                    - generic [ref=e230]: Afghan
                    - generic [ref=e232]: 
                - generic [ref=e234]:
                  - generic [ref=e236]: Marital Status
                  - generic [ref=e239] [cursor=pointer]:
                    - generic [ref=e240]: Single
                    - generic [ref=e242]: 
              - generic [ref=e243]:
                - generic [ref=e245]:
                  - generic [ref=e247]: Date of Birth
                  - generic [ref=e250]:
                    - textbox "yyyy-dd-mm" [ref=e251]: 2023-21-10
                    - generic [ref=e252] [cursor=pointer]: 
                - generic [ref=e254]:
                  - generic [ref=e256]: Gender
                  - generic [ref=e257]:
                    - generic [ref=e261] [cursor=pointer]:
                      - radio "Male" [checked] [ref=e262]
                      - text: Male
                    - generic [ref=e267] [cursor=pointer]:
                      - radio "Female" [ref=e268]
                      - text: Female
            - separator [ref=e270]
            - generic [ref=e271]:
              - paragraph [ref=e272]: "* Required"
              - button "Save" [ref=e273] [cursor=pointer]
        - generic [ref=e274]:
          - separator [ref=e275]
          - generic [ref=e276]:
            - heading "Custom Fields" [level=6] [ref=e277]
            - separator [ref=e278]
            - generic [ref=e279]:
              - generic [ref=e281]:
                - generic [ref=e283]:
                  - generic [ref=e285]: Blood Type
                  - generic [ref=e288] [cursor=pointer]:
                    - generic [ref=e289]: A+
                    - generic [ref=e291]: 
                - generic [ref=e293]:
                  - generic [ref=e295]: Test_Field
                  - textbox [ref=e297]: "445"
              - separator [ref=e298]
              - button "Save" [ref=e300] [cursor=pointer]
        - generic [ref=e301]:
          - separator [ref=e302]
          - generic [ref=e304]:
            - heading "Attachments" [level=6] [ref=e305]
            - button " Add" [ref=e306] [cursor=pointer]:
              - generic [ref=e307]: 
              - text: Add
          - generic [ref=e308]:
            - separator [ref=e309]
            - generic [ref=e311]: (3) Records Found
          - table [ref=e313]:
            - rowgroup [ref=e314]:
              - row " File Name Description Size Type Date Added Added By Actions" [ref=e315]:
                - columnheader "" [ref=e316]:
                  - generic [ref=e318] [cursor=pointer]:
                    - checkbox "" [ref=e319]
                    - generic [ref=e321]: 
                - columnheader "File Name" [ref=e322]
                - columnheader "Description" [ref=e323]
                - columnheader "Size" [ref=e324]
                - columnheader "Type" [ref=e325]
                - columnheader "Date Added" [ref=e326]
                - columnheader "Added By" [ref=e327]
                - columnheader "Actions" [ref=e328]
            - rowgroup [ref=e329]:
              - row " test.png test 53.16 kB image/png 2024-06-02 Admin   " [ref=e331]:
                - cell "" [ref=e332]:
                  - generic [ref=e335] [cursor=pointer]:
                    - checkbox "" [ref=e336]
                    - generic [ref=e338]: 
                - cell "test.png" [ref=e339]:
                  - generic [ref=e340]: test.png
                - cell "test" [ref=e341]:
                  - generic [ref=e342]: test
                - cell "53.16 kB" [ref=e343]:
                  - generic [ref=e344]: 53.16 kB
                - cell "image/png" [ref=e345]:
                  - generic [ref=e346]: image/png
                - cell "2024-06-02" [ref=e347]:
                  - generic [ref=e348]: 2024-06-02
                - cell "Admin" [ref=e349]:
                  - generic [ref=e350]: Admin
                - cell "  " [ref=e351]:
                  - generic [ref=e352]:
                    - button "" [ref=e353] [cursor=pointer]:
                      - generic [ref=e354]: 
                    - button "" [ref=e355] [cursor=pointer]:
                      - generic [ref=e356]: 
                    - button "" [ref=e357] [cursor=pointer]:
                      - generic [ref=e358]: 
              - row " 6a18e0f5e7ace_download.jpg 20.28 kB image/jpeg 2026-29-05 Admin   " [ref=e360]:
                - cell "" [ref=e361]:
                  - generic [ref=e364] [cursor=pointer]:
                    - checkbox "" [ref=e365]
                    - generic [ref=e367]: 
                - cell "6a18e0f5e7ace_download.jpg" [ref=e368]:
                  - generic [ref=e369]: 6a18e0f5e7ace_download.jpg
                - cell [ref=e370]
                - cell "20.28 kB" [ref=e371]:
                  - generic [ref=e372]: 20.28 kB
                - cell "image/jpeg" [ref=e373]:
                  - generic [ref=e374]: image/jpeg
                - cell "2026-29-05" [ref=e375]:
                  - generic [ref=e376]: 2026-29-05
                - cell "Admin" [ref=e377]:
                  - generic [ref=e378]: Admin
                - cell "  " [ref=e379]:
                  - generic [ref=e380]:
                    - button "" [ref=e381] [cursor=pointer]:
                      - generic [ref=e382]: 
                    - button "" [ref=e383] [cursor=pointer]:
                      - generic [ref=e384]: 
                    - button "" [ref=e385] [cursor=pointer]:
                      - generic [ref=e386]: 
              - row " 1_India Post.pdf 326.84 kB application/pdf 2026-29-05 Admin   " [ref=e388]:
                - cell "" [ref=e389]:
                  - generic [ref=e392] [cursor=pointer]:
                    - checkbox "" [ref=e393]
                    - generic [ref=e395]: 
                - cell "1_India Post.pdf" [ref=e396]:
                  - generic [ref=e397]: 1_India Post.pdf
                - cell [ref=e398]
                - cell "326.84 kB" [ref=e399]:
                  - generic [ref=e400]: 326.84 kB
                - cell "application/pdf" [ref=e401]:
                  - generic [ref=e402]: application/pdf
                - cell "2026-29-05" [ref=e403]:
                  - generic [ref=e404]: 2026-29-05
                - cell "Admin" [ref=e405]:
                  - generic [ref=e406]: Admin
                - cell "  " [ref=e407]:
                  - generic [ref=e408]:
                    - button "" [ref=e409] [cursor=pointer]:
                      - generic [ref=e410]: 
                    - button "" [ref=e411] [cursor=pointer]:
                      - generic [ref=e412]: 
                    - button "" [ref=e413] [cursor=pointer]:
                      - generic [ref=e414]: 
    - generic [ref=e415]:
      - paragraph [ref=e416]: OrangeHRM OS 5.8
      - paragraph [ref=e417]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e418] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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
> 24 |     await page.getByRole('link', { name: 'Tax Exemptions' }).click();   
     |                                                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
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
  40 |     await page.getByRole('button', { name: ' Add' }).first().click();   });
  41 | });
  42 | 
```