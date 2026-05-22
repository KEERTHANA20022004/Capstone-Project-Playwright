
 class DashboardPage {
  constructor(page) {
    this.page = page;

    this.profileDropdown = '.oxd-userdropdown-tab';
    this.logoutButton = 'a[href="/web/index.php/auth/logout"]';
  }

  async logout() {
    await this.page.click(this.profileDropdown);
    await this.page.click(this.logoutButton);
  }
}

module.exports = DashboardPage;