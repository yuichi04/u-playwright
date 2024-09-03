import { Locator, Page } from "@playwright/test";

class HomePage {
  private page: Page;
  getStartedBtn: Locator;
  homeLink: Locator;
  headingText: Locator;
  searchIcon: Locator;
  navLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedBtn = page.locator("#get-started");
    this.headingText = page.locator("text=Think different. Make different.");
    this.homeLink = page.locator('#zak-primary-menu:has-text("Home")');
    this.searchIcon = page.locator(
      '//*[@class="zak-header-actions zak-header-actions--desktop"]//a[@class="zak-header-search__toggle"]'
    );
    this.navLinks = page.locator("#zak-primary-menu li[id*=menu]");
  }

  async navigate() {
    await this.page.goto("https://practice.sdetunicorns.com/");
  }

  async getNavLinksText() {
    return this.navLinks.allTextContents();
  }
}

export default HomePage;
